import { lazy } from "react";

const RELOAD_KEY = "chunk-reload";

// React.lazy that survives redeploys: an open tab may ask for chunk names that
// no longer exist, so reload once to pick up the new build. The flag is cleared
// after any successful load, so a later redeploy in the same tab gets its own
// reload, while a chunk that fails again straight after the reload still throws
// (to the nearest ErrorBoundary) instead of looping.
const lazyWithReload = (load) =>
  lazy(() =>
    load().then(
      (module) => {
        try {
          sessionStorage.removeItem(RELOAD_KEY);
        } catch {
          // Storage unavailable: nothing to clear.
        }
        return module;
      },
      (error) => {
        let alreadyReloaded = true;
        try {
          alreadyReloaded = sessionStorage.getItem(RELOAD_KEY) === "1";
          sessionStorage.setItem(RELOAD_KEY, "1");
        } catch {
          // Storage unavailable (e.g. private mode): don't risk a reload loop.
        }
        if (!alreadyReloaded) {
          window.location.reload();
          return new Promise(() => {});
        }
        throw error;
      },
    ),
  );

export default lazyWithReload;
