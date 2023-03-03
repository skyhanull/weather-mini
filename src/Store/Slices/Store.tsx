import { configureStore } from '@reduxjs/toolkit';
import WeatherFiveDay from './fiveDaySlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import WeatherCurrentDay from './CurrentApi';
import useCityNameSlice from './CityName';
import ListSlice from './ListSlice';
export const store = configureStore({
  reducer: {
    WeatherFiveDay,
    WeatherCurrentDay,
    useCityNameSlice,
    ListSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppDispatch = typeof store.dispatch;
export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;

export default store;
