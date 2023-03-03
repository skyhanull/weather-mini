import styled from 'styled-components';
import { useEffect, useState } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Store/Slices/Store';
import { useAppSelect } from '../Store/Slices/Store';
import { WeatherFiveApi } from '../Store/thunk/GoalSaga';
import MyPagePagination from '../Component/Pagination';
import JJJH from '../img/pexels-eberhard-grossgasteiger-2310713.jpg';
import WeatherIcon from '../Component/weatherIcon';
import WeatherDataList from '../Component/weatherDataList';
import DayImg from '../img/dayImg.jpg';
import BackImga from '../img/jasper-wilde-Om51NdOhNX4-unsplash.jpg';
import NoonImga from '../img/dina-gh-7FUNJR10h98-unsplash.jpg';
import { WeatherCurrentApi } from '../Store/thunk/CurrentThunk';

const SubBackContent = styled.div<{ time: number }>`
  background: ${(props) => `${Number(props.time) > 18 ? ` url(${BackImga})` : `url(${NoonImga})`}`};
  background-size: cover;
  height: 100vh;
`;

const CurrentWeatherData = styled.div`
  margin-top: 5rem;
  height: 25vh;
  /* background-color: aqua; */
  display: flex;
  justify-content: center;
`;
const WapperSub = styled.div`
  display: flex;
  flex-wrap: nowrap;
  /* background-color: black; */
  background-color: rgba(0, 0, 0, 0.4);
  height: 50vh;
`;
const CardWeather = styled.span`
  /* background-color: rgba(255, 255, 255, 0.4); */
  display: flex;
  flex-direction: column;
  border: 1px double red;

  width: 20%;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  &:hover {
    background-color: red;
  }
`;

const WeatherSub = () => {
  const fiveData = useSelector((state: RootState) => state.WeatherFiveDay);
  const AppData = useSelector((state: RootState) => state.WeatherCurrentDay);
  const CurrentWeatherOne = useSelector((state: RootState) => state.ListSlice);
  const [totalPost, setTotalPost] = useState(0);
  const [page, setPage] = useState(1);

  const [postPerPage] = useState(5);
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const DataLength = fiveData.data?.list.length;
  const handlePostPage = (page: number) => {
    setPage(page);
  };

  const DateNow = new Date();
  const Datenew = DateNow.getHours();

  const NameCity = useAppSelect((state: RootState) => state.useCityNameSlice.cityName);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(WeatherFiveApi(NameCity));
    // dispatch(WeatherCurrentApi(NameCity));
    setTotalPost(DataLength!);
  }, [NameCity]);

  console.log(CurrentWeatherOne.result.id);

  const Max = fiveData.data?.list.slice(indexOfFirstPost, indexOfLastPost);

  console.log(fiveData.data?.list[0].dt_txt);
  const DateREbal = (str: string) => {
    const DateTimeData = `시간 : ${new Date(str).getHours()}시  ${new Date(str).getMinutes()}분 ${new Date(
      str
    ).getSeconds()}초`;
    return DateTimeData;
  };

  const everDate = (str: string) => {
    return new Date(str).toLocaleDateString();
  };

  return (
    <SubBackContent time={Datenew}>
      <div>{NameCity}의 날씨입니다</div>
      <CurrentWeatherData>
        {/* {CurrentWeatherOne &&
          ç.result.map((el) => (
            <div key={el.id}>
              <div>{WeatherIcon(el.weather[0].main)}</div>
              <div>{el.name}</div>
              <div>{el.main.temp}</div>
            </div>
          ))} */}
        {CurrentWeatherOne.result.weather[0].id}
      </CurrentWeatherData>

      <WapperSub>
        {Max?.map((el, idx) => (
          <CardWeather key={idx}>
            {/* <span>{el.dt_txt}</span> */}
            <span>{everDate(el.dt_txt)}</span>

            <span>{DateREbal(el.dt_txt)}</span>

            <span>구름양:{el.clouds.all}</span>
            <div>온도:{(el.main.temp - 273.15).toFixed(2)}</div>
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
