import React, { useContext } from "react";
import Right03 from "./Right03";
import { useSelector } from "react-redux";

const Right02 = () => {
  //store에 저장된 state을 가져옴
  // export const store = configureStore({
  //   reducer: {
  //     number: numberReducer,
  //   },
  // });
  const number = useSelector((state) => state.number.value);
  const name = useSelector((state) => state.name.value);
  return (
    <div>
      <h1>Right02:</h1>
      <h1>Number:{number}</h1>
      <h1>Name:{name}</h1>
      <Right03 />
    </div>
  );
};

export default Right02;
