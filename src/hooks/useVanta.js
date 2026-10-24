import { useEffect, useRef } from "react";
import * as THREE from "three";

// Older three.js uploaded every new DataTexture automatically; BIRDS' GPU
// simulation depends on that, or its birds never get a starting position.
class LegacyDataTexture extends THREE.DataTexture {
  constructor(...args) {
    super(...args);
    this.needsUpdate = true;
  }
}

// Vanta targets an older three.js. Re-add the APIs it still relies on:
// VertexColors (removed in r125; without it NET/GLOBE/BIRDS render white),
// PlaneBufferGeometry (removed in r144; BIRDS crashes without it) and the
// auto-uploading DataTexture above.
const VANTA_THREE = {
  ...THREE,
  VertexColors: true,
  PlaneBufferGeometry: THREE.PlaneGeometry,
  DataTexture: LegacyDataTexture,
};

// DOTS ignores the THREE option and only reads window.THREE, captured when its
// chunk is first evaluated, so it must be in place before any effect loads.
if (typeof window !== "undefined" && !window.THREE) {
  window.THREE = VANTA_THREE;
}

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Lazily loads a Vanta effect and attaches it to the returned ref.
// Vanta is given the bundled three.js so no extra copy is fetched from a CDN.
const useVanta = (loadEffect, options) => {
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let effect;
    let cancelled = false;

    loadEffect()
      .then(({ default: createEffect }) => {
        if (cancelled || !ref.current) return;
        effect = createEffect({
          el: ref.current,
          THREE: VANTA_THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          ...options,
        });
      })
      .catch((error) => {
        // The page keeps its solid background colour if the effect can't start.
        console.warn("[useVanta] background effect failed to start", error);
      });

    return () => {
      cancelled = true;
      // Vanta's destroy() throws if its init failed part-way; never let that
      // escape into React's cleanup, which would unmount the whole app.
      try {
        effect?.destroy();
      } catch {
        // Nothing left to clean up.
      }
    };
    // The effect is created once per mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
};

export default useVanta;
