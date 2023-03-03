import { configureStore } from '@reduxjs/toolkit';
import WeatherFiveDay from './fiveDaySlice';
import WeatherCurrentDay from './CurrentApiSlice';
import useCityNameSlice from './CityNameSlice';
import CurrentOneSlice from './CurrentOneSlice';
export const store = configureStore({
  reducer: {
    WeatherFiveDay,
    WeatherCurrentDay,
    useCityNameSlice,
    CurrentOneSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
