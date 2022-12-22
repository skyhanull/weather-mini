import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
import * as firebase from "firebase/app";
import React from "react";
import WeatherCard from "./WeaderCard";

const Webresult = styled.div`
  margin-top: 20px;
  background-color: rgba(214, 255, 251, 0.2);
  border-radius: 20px;
  width: 300px;
  height: 300px;
`;

const CardContent = styled.div`
  /* width: calc(90vw / 20%); */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 50vh;
  /* height: 10%;
  background-color: red; */
`;
interface TimeA {
  weather: any;
}

const Weather = () => {
  const Apikey = "c020c3284c152b3c7b93993db86d6d7f";
  const [cityname, SetCityname] = useState("");
  const [lat, setLat] = useState("");
  const [sum, setSum] = useState([]);
  const [lon, setLon] = useState("");
  const [result, Setresult] = useState<any>([]);
  const [currentData, setCurrentData] = useState<any>([]);
  const [res1, setRes1] = useState<any>([]);

  // const As = (dt_txt: any) => {
  //   if (new Date(dt_txt).getDate() === new Date().getDate()) {
  //     // res1.push(new Date(dt_txt).getDate());
  //     res1.push(new Date(dt_txt).getDate());
  //   }
  // };

  // function onGeoOkay(position: any) {
  //   setLat(position.coords.latitude);
  //   setLon(position.coords.longitude);
  //   // 위도 경도 변수 선언
  //   // console.log("You live in", lat, lon);
  // }

  // function onGeoError() {
  //   alert("I can't find you. No weather for you.");
  // }

  // navigator.geolocation.getCurrentPosition(onGeoOkay, onGeoError);

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${Apikey}`;
  const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${Apikey}`;

  const weatherHandler = async () => {
    const res = await axios({
      method: "get",
      url: url,
    });
    const { data } = res;
    Setresult(data.list);
  };

  const CityHandler = (e: any) => {
    SetCityname(e.target.value);
  };

  const currentWeather = async () => {
    const res = await axios({
      method: "get",
      url: url1,
    });
    const { data } = res;
    console.log(data);
    setCurrentData(data);
  };
  // console.log(result.list);
  // result.map((el: any, index: any) => {
  //   if (new Date(el.dt_txt).getDate !== new Date().getDate) {
  //     setSum(el.dt_txt);
  //     console.log(el.dt_txt);
  //   }
  // });

  return (
    <div className="input-section">
      <div className="searchbar">
        <input
          className="input-box"
          type="text"
          placeholder="Search"
          value={cityname}
          onChange={CityHandler}
        />
      </div>
      <button onClick={weatherHandler}> aaa</button>
      <CardContent>
        {result &&
          result.map((el: any) => (
            <WeatherCard key={el.dt} dt_txt={el.dt_txt} weather={el.weather} />
          ))}
        {/* <WeatherCard result={result}></WeatherCard> */}
      </CardContent>
    </div>
  );
};

export default Weather;
