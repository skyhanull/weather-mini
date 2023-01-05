import { createSlice } from "@reduxjs/toolkit";

export interface CityInfo {
  cityName: string;
}
const initialState: CityInfo = {
  cityName: "",
};

export const CityNameSlice = createSlice({
  name: "CityName",
  initialState,
  reducers: {
    editCityName: (state, action) => {
      state.cityName = action.payload;
      console.log(state.cityName);
    },
  },
});

export const { editCityName } = CityNameSlice.actions;
export default CityNameSlice.reducer;
