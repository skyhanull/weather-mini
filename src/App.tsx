import Weather from './Pages.js/Weather';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import "./App.css";

// import { createGlobalStyle } from "styled-components";
import React from 'react';
import WeatherSub from './Pages.js/WeatherSub';
// import About from './Pages.js/About';

function App() {
  return (
    <BrowserRouter>
      <div className="section-two">
        <section>
          <Routes>
            <Route path="/" element={<Weather />} />
            <Route path="/sub" element={<WeatherSub />} />
            <Route path="/detail" element={<WeatherSub />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}
export default App;
