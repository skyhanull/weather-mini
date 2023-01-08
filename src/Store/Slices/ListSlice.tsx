import { createSlice, current } from "@reduxjs/toolkit";

export interface CityInfo {
  item: any;
}
const initialState: CityInfo = {
  item: [],
};

export const ListSlice = createSlice({
  name: "ListSlice",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.item.push({ W: action.payload });
      console.log(current(state.item));
    },
  },
});

export const { addList } = ListSlice.actions;
export default ListSlice.reducer;
