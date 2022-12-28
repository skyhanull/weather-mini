import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContent = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 20%;
  background-color: skyblue;
`;

const CardContenttwo = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 20%;
  background-color: red;
  margin: 3rem;
`;

const WeatherCard = ({ temp, weather, id }: any) => {
  return (
    <CardContenttwo>
      {/* {List.map((el: any, index: any) => (
        <div key={index}>
          <span>{el?.W?.id}</span>
          <span>{el?.W?.weather[0].main}</span>
          <span>{el?.W?.main.temp}</span>
        </div>
      ))} */}
      <div>{id}</div>
      <div>{weather}</div>
      {/* <div>{WeaData?.name}</div>
      <div>{WeaData?.main.temp}</div>
      <div>{WeaData?.weather[0].main}</div> */}
      <button>
        <Link to="/detail">링크타기</Link>
      </button>
    </CardContenttwo>
  );
};

export default WeatherCard;
