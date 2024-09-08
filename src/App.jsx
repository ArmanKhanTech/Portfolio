import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { About, Contact, Home, Projects, Services, Experiance } from "./pages";
import { HomeProvider } from "./context/HomeContext";
import Navbar from "./components/Navbar";
import Audio from "./components/Audio";

const App = () => {
  return (
    <HomeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experiance />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Audio />
      </Router>
    </HomeProvider>
  );
};

export default App;
