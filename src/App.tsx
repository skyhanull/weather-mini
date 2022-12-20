import Weather from "./Pages.js/Weather";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./Pages.js/SideBar";
import { createGlobalStyle } from "styled-components";
import React from "react";
import WeatherSub from "./Pages.js/WeatherSub";
// import Dust from './Pages.js/Dust';

const GlobalStyle = createGlobalStyle`
body{
  background: url("https://cdn.pixabay.com/photo/2020/05/06/06/18/blue-5136251_1280.jpg") ;
  background-size: cover;


}
`;

function App() {
  return (
    <BrowserRouter>
      <div className="section-two">
        <GlobalStyle />
        <main>
          <SideBar />
        </main>
        <section>
          <Routes>
            <Route path="/" element={<Weather />} />
            <Route path="/sub" element={<WeatherSub />} />
            {/* <Route path='/dustinfo' element={<Dust />}/> */}
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}
export default App;
