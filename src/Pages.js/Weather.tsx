import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getWeather, WeatherCurrentDay } from '../Store/Slices/CurrentApi';
import React from 'react';
import HF from '../img/A.jpg';
import WeatherCard from './WeaderCard';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Store/Slices/Store';
import { useAppSelect } from '../Store/Slices/Store';
import { editCityName } from '../Store/Slices/CityName';
import { WeatherCurrentApi } from '../Store/thunk/CurrentThunk';

const WeatherMainPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-image: url(${HF});
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
const Weather = () => {
  const countryList = useSelector((state: RootState) => state.ListSlice);
  const AppData = useSelector((state: RootState) => state.WeatherCurrentDay);
  const currentWeatherList = useAppSelect(getWeather);

  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState('');
  const [AAtext, setAAtext] = useState({});

  const changeName = (value: string) => {
    dispatch(editCityName(value));
  };

  const DateNow = new Date();
  console.log(DateNow.getHours());

  const SchduleA = async (value: string) => {
    try {
      await dispatch(WeatherCurrentApi(value));
      if (AppData !== null) {
        setAAtext([{ ...AAtext }, { ...AppData }]);
      }
    } catch {
      console.log('err');
    }
  };

  const ClickHandler = async (e: string) => {
    changeName(e);
    await SchduleA(e);
    setText('');
  };

  // const removehandler = (id: number) => {
  //   return AppData.result.filter((e) => e.id !== id);
  // };

  return (
    <WeatherMainPage>
      <SearchBarArea>
        <h1>어느 나라의 날씨가 궁금하신가요?</h1>
        <InputBarArea>
          <InputBar value={text} type="text" onChange={(e) => setText(e.target.value)}></InputBar>
          <SubmitBtn type="submit" className="bg-blue-300" onClick={() => ClickHandler(text)}>
            Click
          </SubmitBtn>
        </InputBarArea>
      </SearchBarArea>
      <ResultWeatherList>
        {AppData &&
          AppData.result.map((el: any, index: number) => (
            <WeatherCard
              key={index}
              index={index}
              id={el.id}
              td={el.dt}
              temp={el.main.temp}
              weather={el.weather[0].main}
              name={el.name}
              // removehandler={removehandler}
            ></WeatherCard>
          ))}
      </ResultWeatherList>
    </WeatherMainPage>
  );
};

export default Weather;
