import styled from 'styled-components';
import { useState } from 'react';
import React from 'react';
import MainImage from '../img/mainImage.jpg';
import WeatherCard from './weatherCard';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Store/Slices/Store';
import { editCityName } from '../Store/Slices/CityNameSlice';
import { WeatherCurrentApi } from '../Store/thunk/CurrentThunk';

const Weather = () => {
  const weatherDataList = useSelector((state: RootState) => state.WeatherCurrentDay);
  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState('');

  const changeName = (value: string) => {
    dispatch(editCityName(value));
  };

  const weatherDataHandler = async (value: string) => {
    try {
      await dispatch(WeatherCurrentApi(value));
    } catch {
      console.log('err');
    }
  };

  const ClickHandler = async (e: string) => {
    changeName(e);
    await weatherDataHandler(e);
    setText('');
  };

  return (
    <WeatherMainPage>
      <SearchBarArea>
        <h1>어느 나라의 날씨가 궁금하신가요?</h1>
        <InputBarArea>
          <InputBar value={text} type="text" onChange={(e) => setText(e.target.value)}></InputBar>
          <SubmitBtn type="submit" onClick={() => ClickHandler(text)}>
            Click
          </SubmitBtn>
        </InputBarArea>
      </SearchBarArea>
      <ResultWeatherList>
        {weatherDataList &&
          weatherDataList.result.map((el, index: number) => (
            <WeatherCard key={index} temp={el.main.temp} weather={el.weather[0].main} name={el.name}></WeatherCard>
          ))}
      </ResultWeatherList>
    </WeatherMainPage>
  );
};

export default Weather;

const WeatherMainPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-image: url(${MainImage});
  background-size: cover;
`;

const SearchBarArea = styled.div`
  width: 60vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const InputBarArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50%;
  flex-wrap: wrap;
  flex-direction: column;
`;

const InputBar = styled.input`
  border: none;
  width: 30%;
  height: 10%;
`;

const SubmitBtn = styled.button`
  border: none;
  border-radius: 20%;
  width: 10%;
  height: 10%;
  margin-top: 5%;

  &:hover {
    background-color: blue;
  }
`;

const ResultWeatherList = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  width: 50%;
  overflow-y: scroll;
`;
