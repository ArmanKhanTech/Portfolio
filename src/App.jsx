import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { About, Contact, Home, Projects, Services, Experience } from "./pages";
import { Navbar, Audio } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Audio />
    </Router>
  );
};

export default App;
