import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "홍길동",
};

export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    onHandleName: (state, action) => {
      state.value = action.payload === "홍길동" ? "여진구" : "홍길동";
    },
  },
});

console.log("nameSlice", nameSlice);

//dispatch에서 사용하기 위해서
export const { onHandleName } = nameSlice.actions;

//store에서 사용하기 위해서
export default nameSlice.reducer;
