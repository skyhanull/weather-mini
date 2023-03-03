import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const ApiM = process.env.REACT_APP_API_KEY;

export const WeatherFiveApi = createAsyncThunk('WeatherFiveApi', async (value: string) => {
  try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=` + ApiM);
    return await res.data;
  } catch (err) {
    throw new Error();
  }
});
