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

const PageFallback = () => <div className="fixed inset-0 bg-[#1b1212]" />;

const AppRoutes = () => {
  const { pathname } = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDraggable, setIsDraggable] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  usePageMeta(pathname);

  // Once the landing scene is ready, warm up the other pages in the background.
  useEffect(() => {
    if (!isLoaded) return;
    const idle = window.requestIdleCallback ?? ((cb) => setTimeout(cb, 1500));
    idle(() => {
      [
        loadAbout,
        loadExperience,
        loadProjects,
        loadServices,
        loadContact,
      ].forEach((load) => load());
    });
  }, [isLoaded]);

  const isHomePage = pathname === "/";
  const hideChrome = isHomePage && (!isLoaded || isDraggable || showWelcome);

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
                  isLoaded={isLoaded}
                  setIsLoaded={setIsLoaded}
                  isDraggable={isDraggable}
                  setIsDraggable={setIsDraggable}
                  showWelcome={showWelcome}
                  setShowWelcome={setShowWelcome}
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
