import { configureStore } from "@reduxjs/toolkit";
import WeatherFiveDay from "../Store/Slices/GoalSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import WeatherCurrentDay from "../Store/Slices/CurrentApi";
import useCityNameSlice from "../Store/Slices/CityName";
import ListItem from "../Store/Slices/ListSlice";
export const store = configureStore({
  reducer: {
    WeatherFiveDay,
    WeatherCurrentDay,
    useCityNameSlice,
    ListItem,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppDispatch = typeof store.dispatch;
export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;

export default store;
