import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./numberSlice";
import nameReducer from "./nameSlice";

//변수를 외부에서 사용할 수 있게 export 함
export const store = configureStore({
  reducer: {
    number: numberReducer,
    name: nameReducer,
  },
});
