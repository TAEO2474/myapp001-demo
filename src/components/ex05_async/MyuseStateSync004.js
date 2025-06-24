import React, { useEffect, useState } from "react";

// state업데이트는 비동기적으로 처리되기 때문에, 연속적으로 state를
// 업데이트하려고 하면 이전 state값에 기반한 변경이 모두 동일한 값에서
// 발생한다. 이를 해결하기 위해서 useEffect와 그 의존성배열을 이용해서
// 해결할 수 있다.
const MyuseStateSync004 = () => {
  const [number, setNumber] = useState(0);
  const [action, setAction] = useState("");

  useEffect(() => {
    const updateNumber = (changes) => {
      changes.forEach((change) => setNumber((prev) => prev + change));
    };

    if (action === "up") updateNumber([3, 2, 1]);
    else if (action === "down") updateNumber([-3, -2, -1]);

    setAction("");
  }, [action]);

  useEffect(() => {
    console.log("number chang: ", number);
  }, [number]);

  const handleUpNumber = () => {
    setAction("up");
  };

  const handleDownNumber = () => {
    setAction("down");
  };
  return (
    <div>
      <p>{number}</p>
      <button onClick={handleUpNumber}>UP</button>
      <button onClick={handleDownNumber}>Down</button>
    </div>
  );
};

export default MyuseStateSync004;
