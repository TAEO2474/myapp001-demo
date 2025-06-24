import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onHandleIncrease, onHandleDecrease } from "./toolkit/numberSlice";

const Right03 = () => {
  //store에 저장된 state을 가져옴
  // export const store = configureStore({
  //   reducer: {
  //     number: numberReducer,
  //   },
  // });
  const number = useSelector((state) => state.number.value);

  //store의 state 업데이트
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right03:</h1>
      <h1>Number:{number}</h1>
      <input
        type="button"
        value="+"
        onClick={() => dispatch(onHandleIncrease(1))}
      />
      <input
        type="button"
        value="-"
        onClick={() => dispatch(onHandleDecrease(1))}
      />
    </div>
  );
};

export default Right03;
