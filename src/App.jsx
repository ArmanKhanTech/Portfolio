import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { About, Contact, Home, Projects, Services } from "./pages";

import { HomeProvider } from "../src/context/HomeContext";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <HomeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </HomeProvider>
  );
};

export default App;