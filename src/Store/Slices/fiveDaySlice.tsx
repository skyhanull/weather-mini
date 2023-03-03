import { createSlice } from '@reduxjs/toolkit';
import { WeatherFiveApi } from '../thunk/GoalSaga';
import { RootState } from './Store';

export interface CounterStateA {
  cod: string;
  cnt: number;
  city: {
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    timezone: number;
  };
  list: [
    {
      clouds: { all: number };
      dt: number;
      dt_txt: string;
      weather: [
        {
          description: string;
          icon: string;
          id: number;
          main: string;
        }
      ];
      main: {
        temp: number;
        temp_kf: number;
        temp_max: number;
        temp_min: number;
        sea_level: number;
        pressure: number;
        humidity: number;
        grnd_level: number;
        feels_like: number;
      };
      wind: { speed: number; deg: number; gust: number };
    }
  ];
  message: number;
}
export interface WeatherState {
  data: CounterStateA | null;
  loading: boolean;
  error: boolean;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: false,
};

export const WeatherFiveDay = createSlice({
  name: 'WeatherFiveDay',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(WeatherFiveApi.pending, (state, action) => {
      console.log('d');
      state.loading = true;
      state.error = false;
    }),
      builder.addCase(WeatherFiveApi.fulfilled, (state, action) => {
        state.data = action.payload;
        console.log('e');
        console.log(state.data);
        state.loading = false;
        state.error = false;
      }),
      builder.addCase(WeatherFiveApi.rejected, (state, action) => {
        console.log('f');
        state.error = true;
        state.loading = false;
      });
  },
});
export const getFiveWeather = (state: RootState) => state.WeatherFiveDay;
export default WeatherFiveDay.reducer;
