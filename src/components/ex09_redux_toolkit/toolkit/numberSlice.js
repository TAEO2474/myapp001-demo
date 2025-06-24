import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    onHandleIncrease: (state, action) => {
      console.log("action:", action);
      state.value += action.payload;
    },
    onHandleDecrease: (state, action) => {
      state.value -= action.payload;
    },
  },
});

console.log("numberSlice:", numberSlice);

//Action creators (dispatch에서 사용)
export const { onHandleIncrease, onHandleDecrease } = numberSlice.actions;
//Reducer (store에서 사용)
export default numberSlice.reducer;
