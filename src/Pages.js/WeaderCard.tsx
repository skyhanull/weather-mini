import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../Store/Slices/Store';
import WeatherIcon from '../Component/weatherIcon';
import WeatherDataList from '../Component/weatherDataList';

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
  const dispatch = useDispatch();

  // const removehandler = (id: number) => {
  //   const BB = AppData.result.filter((e) => e.id !== id);
  //   console.log([...BB]);
  //   setArrayList([...BB]);
  // };

  const CombinData = { arraylist, id };
  return (
    <CardContenttwo>
      <WeatherDataContent>
        <WeatherContent>{WeatherIcon(weather)}</WeatherContent>

        <WeatherCardInfo>{WeatherDataList({ name, weather, temp })}</WeatherCardInfo>
      </WeatherDataContent>
      <button>
        <Link to="/detail">자세히보기</Link>
      </button>
    </CardContenttwo>
  );
};

export default WeatherCard;
