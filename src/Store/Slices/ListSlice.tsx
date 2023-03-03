import { createSlice, current } from '@reduxjs/toolkit';
import { WeatherCurrentApi } from '../thunk/CurrentThunk';
import { RootState } from './Store';

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
const result: WeatherData = {
  base: '',
  clouds: {
    all: 0,
  },
  cod: 0,
  coord: {
    lon: 0,
    lat: 0,
  },
  dt: 0,
  id: 0,
  main: {
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
  name: '',
  sys: {
    country: '',
    id: 0,
    sunrise: 0,
    sunset: 0,
    type: 0,
  },
  timezone: 0,
  visibility: 0,
  weather: [
    //  icon: "",
    //   id: 0,
    //   main: ""
    {
      description: '',
      icon: '',
      id: 0,
      main: '',
    },
  ],
  wind: {
    speed: 0,
    deg: 0,
  },
};
export const ListSlice = createSlice({
  name: 'ListSlice',
  initialState: { result, loading: false, error: false },
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(WeatherCurrentApi.pending, (state, action) => {
    //   state.loading = true;
    //   state.error = false;
    // }),
    //   builder.addCase(WeatherCurrentApi.fulfilled, (state, action) => {
    //     state.data = action.payload;
    //     console.log(state.data);
    //     state.loading = false;
    //     state.error = false;
    //   }),
    //   builder.addCase(WeatherCurrentApi.rejected, (state, action) => {
    //     state.error = true;
    //     state.loading = false;
    //   });
    builder
      .addCase(WeatherCurrentApi.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(WeatherCurrentApi.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action.payload !== undefined) {
          const CurrentAPidata = action.payload;
          state.result = CurrentAPidata;
          console.log(state.result);
        }

        state.loading = false;
        state.error = false;
      })
      .addCase(WeatherCurrentApi.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

// export const { removeList } = ListSlice.actions;
export const getCurrentWeather = (state: RootState) => state.WeatherCurrentDay;
export default ListSlice.reducer;
