import React, { useReducer } from "react";

//reducer :  state를 업데이트 해주는 역할
//dispatch : state 업데이트 요청
//action : 요청한 내용
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const MyuseReducer01 = () => {
  //const [상태, reducer요청함수] = useReducer(state를 업데이트해주는 reducer, state의 초기값 )
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 카운트 값: <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        +1 INCREMENT
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        -1 DECREMENT
      </button>
    </div>
  );
};

export default MyuseReducer01;
