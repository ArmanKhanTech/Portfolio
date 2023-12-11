import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { About, Contact, Home, Projects, Services } from "./pages";
import React from "react";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
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
    </main>
  );
};

export default App;
