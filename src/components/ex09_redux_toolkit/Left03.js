import React from "react";
import { useSelector } from "react-redux";

const Left03 = () => {
  //store에 저장된 state을 가져옴
  // export const store = configureStore({
  //   reducer: {
  //     number: numberReducer,
  //   },
  // });
  const number = useSelector((state) => state.number.value);

  return (
    <div>
      <h1>Left03:</h1>
      <h1>Number:{number}</h1>
    </div>
  );
};

export default Left03;
