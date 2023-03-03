import styled from 'styled-components';
import { useEffect, useState } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Store/Slices/Store';
import { WeatherFiveApi } from '../Store/thunk/fiveApiThunk';
import MyPagePagination from '../Component/Pagination';
import WeatherIcon from '../Component/weatherIcon';
import DayImage from '../img/dayImage.jpg';
import NightImage from '../img/nightImage.jpg';
import { useParams } from 'react-router-dom';

const WeatherSub = () => {
  const fiveData = useSelector((state: RootState) => state.WeatherFiveDay);
  const AppData = useSelector((state: RootState) => state.WeatherCurrentDay);
  const dispatch = useDispatch<AppDispatch>();
  const { name } = useParams();
  const [totalPost, setTotalPost] = useState(0);
  const [page, setPage] = useState(1);
  const [postPerPage] = useState(5);
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const DataLength = fiveData.data?.list.length;
  const sliceFiveData = fiveData.data?.list.slice(indexOfFirstPost, indexOfLastPost);
  const DateNow = new Date();
  const Datenew = DateNow.getHours();

  useEffect(() => {
    dispatch(WeatherFiveApi(name!));
    setTotalPost(DataLength!);
  }, [indexOfLastPost, indexOfFirstPost, DataLength, name]);

  const handlePostPage = (page: number) => {
    setPage(page);
  };

  const timeSlice = (str: string) => {
    const DateTimeData = `시간 : ${new Date(str).getHours()}시  ${new Date(str).getMinutes()}분 ${new Date(
      str
    ).getSeconds()}초`;
    return DateTimeData;
  };

  const dateSlice = (str: string) => {
    return new Date(str).toLocaleDateString();
  };

  const FilterCurrentData = AppData.result.filter((el) => el.name === name);

  return (
    <SubBackContent time={Datenew}>
      <CurrentWeatherContent>
        <h1>{name}의 날씨입니다.</h1>
        <div>{FilterCurrentData[0].weather[0].id}</div>
        <div>온도:{(FilterCurrentData[0].main.temp - 273.15).toFixed(2)}°C</div>
        <div>날씨:{FilterCurrentData[0].weather[0].main}</div>
        <div>{WeatherIcon(FilterCurrentData[0].weather[0].main)}</div>
      </CurrentWeatherContent>

      <WapperSub time={Datenew}>
        {sliceFiveData?.map((el, idx) => (
          <CardWeather key={idx}>
            <span>{dateSlice(el.dt_txt)}</span>
            <span>{timeSlice(el.dt_txt)}</span>
            <span>구름양:{el.clouds.all}</span>
            <div>온도:{(el.main.temp - 273.15).toFixed(2)}°C</div>
            <div>습도 :{el.main.humidity}</div>
            <div>풍속:{el.wind.speed}</div>
            <div>{WeatherIcon(el.weather[0].main)}</div>
          </CardWeather>
        ))}
      </WapperSub>

      <MyPagePagination
        totalCount={totalPost}
        page={page}
        postPerPage={postPerPage}
        pageRangeDisplayed={5}
        handlePageChange={handlePostPage}
      />
    </SubBackContent>
  );
};
export default WeatherSub;

const SubBackContent = styled.div<{ time: number }>`
  background: ${(props) =>
    `${Number(props.time) < 6 || Number(props.time) > 18 ? `url(${NightImage})` : `url(${DayImage})`}`};
  background-size: cover;
  height: 100vh;
`;

const CurrentWeatherContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const WapperSub = styled.div<{ time: number }>`
  display: flex;
  flex-wrap: nowrap;
  background-color: ${(props) =>
    `${Number(props.time) < 6 || Number(props.time) > 18 ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'}`};
  height: 50vh;
`;
const CardWeather = styled.span`
  display: flex;
  flex-direction: column;
  border: 1px double black;

  width: 20%;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  &:hover {
    background-color: rgba(83, 108, 161, 0.4);
  }
`;
