import { useEffect, useRef } from "react";

// Vanta targets an older three.js. This loads the bundled three.js on demand
// (so page content never waits for it) and patches back what Vanta relies on.
let vantaThreePromise;
const loadVantaThree = () =>
  (vantaThreePromise ??= import("three").then((THREE) => {
    // BIRDS (phone path) sizes its colour buffer from attribute.length, which
    // newer three.js dropped; without it every bird renders black.
    if (!("length" in THREE.BufferAttribute.prototype)) {
      Object.defineProperty(THREE.BufferAttribute.prototype, "length", {
        get() {
          return this.array.length;
        },
        configurable: true,
      });
    }

    // Older three.js uploaded every new DataTexture automatically; BIRDS' GPU
    // simulation depends on that, or its birds never get a starting position.
    class LegacyDataTexture extends THREE.DataTexture {
      constructor(...args) {
        super(...args);
        this.needsUpdate = true;
      }
    }

    // VertexColors (removed in r125; without it NET/GLOBE/BIRDS render white)
    // and PlaneBufferGeometry (removed in r144; BIRDS crashes without it).
    const vantaThree = {
      ...THREE,
      VertexColors: true,
      PlaneBufferGeometry: THREE.PlaneGeometry,
      DataTexture: LegacyDataTexture,
    };

    // DOTS ignores the THREE option and only reads window.THREE, captured when
    // its chunk is first evaluated, so it must be set before effects load.
    if (!window.THREE) window.THREE = vantaThree;
    return vantaThree;
  }));

// BIRDS simulates its flock on the GPU unless the browser looks like a phone.
// That path needs float render targets, which many GPUs (iPads, older laptops,
// some tablets) lack: the birds then silently never appear.
let gpuBirdsSupported;
export const canRunBirds = () => {
  if (gpuBirdsSupported !== undefined) return gpuBirdsSupported;

  // Same test Vanta uses to pick its CPU (phone) path, which works everywhere.
  const usesCpuPath =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    ) || window.innerWidth < 600;

  let floatTargets = false;
  try {
    const gl = document.createElement("canvas").getContext("webgl2");
    floatTargets = !!gl?.getExtension("EXT_color_buffer_float");
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
  } catch {
    floatTargets = false;
  }

  gpuBirdsSupported = usesCpuPath || floatTargets;
  return gpuBirdsSupported;
};

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Lazily loads a Vanta effect and attaches it to the returned ref. Until it
// starts (or if it can't), the element's CSS background shows instead.
const useVanta = (loadEffect, options) => {
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let effect;
    let cancelled = false;

    loadVantaThree()
      .then((THREE) =>
        loadEffect().then(({ default: createEffect }) => {
          if (cancelled || !ref.current) return;
          effect = createEffect({
            el: ref.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            ...options,
          });
        }),
      )
      .catch((error) => {
        console.warn("[useVanta] background effect failed to start", error);
      });

    return () => {
      cancelled = true;
      if (!effect) return;
      // Vanta's destroy() never releases its WebGL context. Browsers cap live
      // contexts (phones especially), so leaked ones eventually make new
      // backgrounds fail after a few page changes. Free it explicitly.
      const renderer = effect.renderer;
      try {
        effect.destroy();
      } catch {
        // destroy() throws if init failed part-way; nothing left to clean up.
      }
      renderer?.dispose();
      renderer?.forceContextLoss();
    };
    // The effect is created once per mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
};

export default useVanta;
