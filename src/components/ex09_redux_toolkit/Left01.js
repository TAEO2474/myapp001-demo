import React from "react";
import Left02 from "./Left02";
import { useDispatch, useSelector } from "react-redux";
import { onHandleName } from "./toolkit/nameSlice";

const Left01 = () => {
  const name = useSelector((state) => state.name.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Left1:</h1>
      <h1>Name: {name}</h1>
      <button onClick={() => dispatch(onHandleName(name))}>Nameclick</button>
      <Left02 />
    </div>
  );
};

export default Left01;
