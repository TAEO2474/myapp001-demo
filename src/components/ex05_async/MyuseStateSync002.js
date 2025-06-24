import React, { useState } from "react";

/*
useState을 동기화로 처리하는 방법:
state의 값을 콜백함수의 인자로 넣는다.
*/

const MyuseStateSync002 = () => {
  const [number, setNumber] = useState(0);

  const handleUpNumber = () => {
    //state의 값을 순차적으로 변경할때 콜백함수를 사용한다.
    // setNumber((number) => {
    //   return number + 3;
    // });

    setNumber((number) => number + 3);
    console.log(number);

    setNumber((number) => {
      return number + 2;
    });
    console.log(number);

    setNumber((number) => {
      return number + 1;
    });
    console.log(number);
  };

  const handleDownNumber = () => {
    // setNumber((number) => {
    //   return number - 3;
    // });

    setNumber((number) => number - 3);
    console.log(number);

    setNumber((number) => {
      return number - 2;
    });
    console.log(number);

    setNumber((number) => {
      return number - 1;
    });
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

export default MyuseStateSync002;
