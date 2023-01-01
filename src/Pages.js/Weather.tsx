import styled from "styled-components";
import { useState } from "react";
import "./Weather.css";
import { getWeather } from "../Store/Slices/CurrentApi";
import React from "react";
import WeatherCard from "./WeaderCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Store/Store";
import { useAppSelect } from "../Store/Store";
import { editCityName } from "../Store/Slices/CityName";
import { WeatherCurrentApi } from "../Store/Sagas/CurrentThunk";
import { addList } from "../Store/Slices/ListSlice";

const Weather = () => {
  // const WeatherFiveList = useSelector(
  //   (state: RootState) => state.WeatherFiveDay
  // );
  // const CityNameInput = useSelector(
  //   (state: RootState) => state.useCityNameSlice
  // );
  const List = useSelector((state: RootState) => state.ListItem.item);
  const Wea = useAppSelect(getWeather);
  const WeaData = Wea.data;

  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState("");

  const changeName = (value: string) => {
    dispatch(editCityName(value));
    dispatch(WeatherCurrentApi(value));
    // dispatch(WeatherFiveApi(value));
    dispatch(addList(WeaData));
  };

  const ClickHandler = (e: string) => {
    changeName(e);
    setText("");
  };

  return (
    <>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={() => ClickHandler(text)}>A</button>
      {/* <div>{CurrentList.weather[0]}</div> */}
      {/* <div>
        {CurrentList &&
          Object.values(CurrentList).map((el: any, index: number) => (
            <WeatherCard
              key={index}
              // Temp={el.main.temp}
              // main={el[index].weather}
              Text={el.name}
              data={el}
            />
          ))}
      </div> */}
      {/* <WeatherCard
        // Temp={CurrentList?.main?.temp}
        main={CurrentList.weather}
        Text={CurrentList.name}
      /> */}
      {/* <WeatherCard WeaData={WeaData} List={List} /> */}
      {List.map((el: any, index: any) => (
        <WeatherCard
          key={index}
          id={el?.W?.id}
          weather={el?.W?.weather[0].main}
          temp={el?.W?.main.temp}
        ></WeatherCard>
      ))}
    </>
  );
};

export default Weather;
