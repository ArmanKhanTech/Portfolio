import React, { useState, useCallback } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { About, Contact, Home, Projects, Services, Experience } from "./pages";
import { Navbar, Audio } from "./components";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback((status) => {
    setIsLoaded(status);
  }, []);

  return (
    <Router>
      <Navbar isLoaded={isLoaded} />
      <Routes>
        <Route path="/" element={<Home isLoaded={isLoaded} handleLoad={handleLoad} />} />
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Audio isLoaded={isLoaded} />
    </Router>
  );
};

export default App;
