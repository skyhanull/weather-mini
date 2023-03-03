import { createSlice } from '@reduxjs/toolkit';
import { WeatherCurrentApi } from '../thunk/CurrentThunk';
import { RootState } from './Store';

export const ApiM = `${process.env.API_KEY}`;

export interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    }
  ];
  wind: {
    speed: number;
    deg: number;
  };
}

const result: WeatherData[] = [];
export const WeatherCurrentDay = createSlice({
  name: 'WeatherCurrentDay',
  initialState: { result, loading: false, error: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(WeatherCurrentApi.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(WeatherCurrentApi.fulfilled, (state, action) => {
        if (action.payload !== undefined) state.result.push(action.payload);
        state.loading = false;
        state.error = false;
      })
      .addCase(WeatherCurrentApi.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export const getWeather = (state: RootState) => state.WeatherCurrentDay;
export default WeatherCurrentDay.reducer;
