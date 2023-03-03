import Weather from './Pages.js/Weather';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import WeatherSub from './Pages.js/WeatherSub';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/detail/:name" element={<WeatherSub />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
