import React, { useState, useCallback } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { About, Contact, Home, Projects, Services, Experience } from "./pages";
import { Navbar, Audio } from "./components";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDraggable, setIsDraggable] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <Router>
      <Navbar isLoaded={isLoaded} isDraggable={isDraggable} showWelcome={showWelcome} />
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
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Audio isLoaded={isLoaded} isDraggable={isDraggable} showWelcome={showWelcome} />
    </Router>
  );
};

export default App;
