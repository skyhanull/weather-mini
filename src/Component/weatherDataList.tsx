import React from 'react';

interface IweatherData {
  name: string;
  weather: string;
  temp: number;
}
const WeatherDataList = ({ name, weather, temp }: IweatherData) => {
  return (
    <div>
      <div>{name}</div>
      <div>{weather}</div>
      <div>{(temp - 273.15).toFixed(2)}</div>
    </div>
  );
};

export default WeatherDataList;
