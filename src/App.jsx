import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { About, Contact, Home, Projects, Services } from "./pages";
import { HomeProvider } from '../src/context/HomeContext';

const App = () => {
  return (
    <main>
      <HomeProvider>
        <Router>
          <Routes>
            <Route path='/' element={
                <Home />
            } />
            <Route
              path='/*'
              element={
                <>
                  <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/services' element={<Services />} />
                  </Routes>
                </>
              } />
          </Routes>
        </Router>
      </HomeProvider>
    </main>
  );
};

export default App;
