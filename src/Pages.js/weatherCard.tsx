import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { WeatherFiveApi } from '../Store/thunk/fiveApiThunk';

import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../Store/Slices/Store';
import WeatherIcon from '../Component/weatherIcon';
import WeatherDataList from '../Component/weatherDataList';
import { WeatherFiveDay } from '../Store/Slices/fiveDaySlice';
import WeatherSub from './WeatherSub';

interface Icountry {
  id: number;
  weather: string;
  name: string;
  temp: number;
  td: number;
  index: number;
}

const CardContent = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 20%;
  background-color: skyblue;
`;

const CardContenttwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: orange;
  margin: 3rem;
  font-size: 20px;
  flex-direction: column;
`;

const WeatherContent = styled.div`
  /* width: 20%; */
  margin: 3% 3% 5% 3%;
`;

const WeatherCardInfo = styled.div`
  display: flex;
  font-size: 25px;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10%;
`;

const WeatherDataContent = styled.div`
  display: flex;
  flex-direction: row;
`;
const WeatherCard = ({ id, td, temp, weather, name, index }: Icountry) => {
  const AppData = useSelector((state: RootState) => state.WeatherCurrentDay);
  const removal = useSelector((state: RootState) => state.ListSlice);
  console.log(removal);
  const [arraylist, setArrayList] = useState(AppData.result);
  // const dispatch = useDispatch();
  const dispatch = useDispatch<AppDispatch>();

  // const AAAA =async(name:string)=>{
  //   dispatch(WeatherFiveApi(name));
  // }
  // const CombinData = { arraylist, id };
  console.log(name);
  return (
    <CardContenttwo>
      <WeatherDataContent>
        <WeatherContent>{WeatherIcon(weather)}</WeatherContent>

        <WeatherCardInfo>{WeatherDataList({ name, weather, temp })}</WeatherCardInfo>
      </WeatherDataContent>
      {/* <WeatherSub name={name} /> */}
      <button onClick={() => dispatch(WeatherFiveApi(name))}>
        <Link to={`/detail/${name}`}>자세히보기</Link>
      </button>
    </CardContenttwo>
  );
};

export default WeatherCard;
