import { createSlice } from "@reduxjs/toolkit";
import { WeatherCurrentApi } from "../Sagas/CurrentThunk";
import { RootState } from "../Store";

export const ApiM = `${process.env.API_KEY}`;

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}
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
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
  };
}

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: boolean;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: false,
};

export const WeatherCurrentDay = createSlice({
  name: "WeatherCurrentDay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(WeatherCurrentApi.pending, (state, action) => {
      console.log("a");
      state.loading = true;
      state.error = false;
    }),
      builder.addCase(WeatherCurrentApi.fulfilled, (state, action) => {
        state.data = action.payload;
        console.log("b");
        console.log(state.data);
        state.loading = false;
        state.error = false;
      }),
      builder.addCase(WeatherCurrentApi.rejected, (state, action) => {
        console.log("c");
        state.error = true;
        state.loading = false;
      });
  },
});
export const getWeather = (state: RootState) => state.WeatherCurrentDay;
export default WeatherCurrentDay.reducer;
