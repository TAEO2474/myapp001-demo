import React, { useState } from "react";

/*
React은 state(데이터)가 변경이 될때마다 렌더링이 발생한다.
useState( )은 '비동기화'로 처리한다.
*/

const MyUseStateSync001 = () => {
  const [number, setNumber] = useState(0);

  const handleUpNumber = () => {
    setNumber(number + 3);
    console.log(number);

    setNumber(number + 2);
    console.log(number);

    setNumber(number + 1);
    console.log(number);
  };

  const handleDownNumber = () => {
    setNumber(number - 3);
    console.log(number);

    setNumber(number - 2);
    console.log(number);

    setNumber(number - 1);
    console.log(number);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={handleUpNumber}>UP</button>
      <button onClick={handleDownNumber}>Down</button>
    </div>
  );
};

export default MyUseStateSync001;
