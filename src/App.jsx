import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import { Navbar, Audio } from "./components";
import usePageMeta from "./hooks/usePageMeta";

// Secondary pages are split into their own chunks so the landing page loads less.
const loadAbout = () => import("./pages/About");
const loadExperience = () => import("./pages/Experience");
const loadProjects = () => import("./pages/Projects");
const loadServices = () => import("./pages/Services");
const loadContact = () => import("./pages/Contact");

// After a redeploy, an open tab may ask for chunk names that no longer exist.
// Reload once to pick up the new build instead of showing a blank page.
const lazyPage = (load) =>
  lazy(() =>
    load().catch((error) => {
      const key = "chunk-reload";
      let alreadyReloaded = true;
      try {
        alreadyReloaded = sessionStorage.getItem(key) === "1";
        sessionStorage.setItem(key, "1");
      } catch {
        // Storage unavailable (e.g. private mode): don't risk a reload loop.
      }
      if (!alreadyReloaded) {
        window.location.reload();
        return new Promise(() => {});
      }
      throw error;
    }),
  );

const About = lazyPage(loadAbout);
const Experience = lazyPage(loadExperience);
const Projects = lazyPage(loadProjects);
const Services = lazyPage(loadServices);
const Contact = lazyPage(loadContact);

const PageFallback = () => <div className="fixed inset-0 page-backdrop" />;

const AppRoutes = () => {
  const { pathname } = useLocation();
  const [isDraggable, setIsDraggable] = useState(false);

  usePageMeta(pathname);

  // Once the first page is up, warm up the others in the background.
  useEffect(() => {
    const idle = window.requestIdleCallback ?? ((cb) => setTimeout(cb, 2000));
    idle(() => {
      [
        loadAbout,
        loadExperience,
        loadProjects,
        loadServices,
        loadContact,
      ].forEach((load) => load());
    });
  }, []);

  const isHomePage = pathname === "/";
  // While the visitor drags the sky, get everything else out of the way.
  const hideChrome = isHomePage && isDraggable;

  return (
    <>
      <Navbar hidden={hideChrome} overlay={!isHomePage} />
      <main>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isDraggable={isDraggable}
                  setIsDraggable={setIsDraggable}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Audio hidden={hideChrome} />
    </>
  );
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
