import React, { Suspense, useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import { Navbar, Audio, ErrorBoundary } from "./components";
import usePageMeta from "./hooks/usePageMeta";
import lazyWithReload from "./lazyWithReload";

// Secondary pages are split into their own chunks so the landing page loads less.
const loadAbout = () => import("./pages/About");
const loadExperience = () => import("./pages/Experience");
const loadProjects = () => import("./pages/Projects");
const loadServices = () => import("./pages/Services");
const loadContact = () => import("./pages/Contact");

const About = lazyWithReload(loadAbout);
const Experience = lazyWithReload(loadExperience);
const Projects = lazyWithReload(loadProjects);
const Services = lazyWithReload(loadServices);
const Contact = lazyWithReload(loadContact);

const PageFallback = () => <div className="fixed inset-0 page-backdrop" />;

// Shown if a page still can't load after the automatic reload.
const PageError = () => (
  <div className="fixed inset-0 page-backdrop flex flex-col items-center justify-center gap-4 text-white text-xl p-5 text-center">
    <p>This page couldn&apos;t load.</p>
    <button
      type="button"
      onClick={() => window.location.reload()}
      className="text-orange-600 border border-orange-600 px-4 py-2 rounded-xl font-semibold"
    >
      Reload
    </button>
  </div>
);

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
        {/* Keyed by route so navigating away clears a failed page. */}
        <ErrorBoundary key={pathname} fallback={<PageError />}>
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
        </ErrorBoundary>
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
