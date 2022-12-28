import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import "./Weather.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { WeatherFiveDay } from "../Store/Slices/GoalSlice";
import { AppDispatch, RootState } from "../Store/Store";
import { useAppSelect } from "../Store/Store";
import { WeatherFiveApi } from "../Store/Sagas/GoalSaga";

const WeatherSub = () => {
  const fiveData = useSelector((state: RootState) => state.WeatherFiveDay);

  const NameCity = useAppSelect(
    (state: RootState) => state.useCityNameSlice.cityName
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(WeatherFiveApi(NameCity));
  }, [NameCity]);
  console.log(fiveData.data?.list[0].dt);
  return (
    <div>
      {fiveData.data?.list.map((el, index) => (
        <div key={index}>{el.dt}</div>
      ))}
    </div>
  );
};
export default WeatherSub;
