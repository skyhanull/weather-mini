import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { WeatherFiveApi } from '../Store/thunk/fiveApiThunk';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../Store/Slices/Store';
import WeatherIcon from '../Component/weatherIcon';
import WeatherDataList from '../Component/weatherDataList';

interface Icountry {
  weather: string;
  name: string;
  temp: number;
}

const WeatherCard = ({ temp, weather, name }: Icountry) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <CardContenttwo>
      <WeatherDataContent>
        <WeatherContent>{WeatherIcon(weather)}</WeatherContent>
        <WeatherCardInfo>{WeatherDataList({ name, weather, temp })}</WeatherCardInfo>
      </WeatherDataContent>
      <WeatherBtn onClick={() => dispatch(WeatherFiveApi(name))}>
        <Link to={`/detail/${name}`}>자세히보기</Link>
      </WeatherBtn>
    </CardContenttwo>
  );
};

export default WeatherCard;

const CardContenttwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: orange;
  margin: 3rem;
  font-size: 20px;
  flex-direction: column;
`;

const WeatherContent = styled.div`
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

const WeatherBtn = styled.button`
  background-color: bisque;
`;
