import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  showMenue: boolean;
};

const initialState: initialStateType = {
  showMenue: false,
};

const menueSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenue: (state) => {
      state.showMenue = !state.showMenue;
    },
  },
});

export default menueSlice.reducer;

export const { toggleMenue } = menueSlice.actions;
