import React, { useEffect, useState } from "react";

// state업데이트는 비동기적으로 처리되기 때문에, 연속적으로 state를
// 업데이트하려고 하면 이전 state값에 기반한 변경이 모두 동일한 값에서
// 발생한다. 이를 해결하기 위해서 useEffect와 그 의존성배열을 이용해서
// 해결할 수 있다.
const MyuseStateSync003 = () => {
  const [number, setNumber] = useState(0);
  const [action, setAction] = useState("");

  useEffect(() => {
    if (action === "up") {
      //React는 성능 최적화를 위해, 동일한 이벤트 루프 내에서 발생한 여러 상태 업데이트를 하나로 묶어서 처리한다.
      //그래서 setNumber() 세 줄이 한 useEffect 안에서 연속 실행되면,
      // React는 이들을 묶어 최종 결과값만 계산하고 렌더링도 딱 한 번만 한다.
      setNumber((prev) => prev + 3); //prev는 개발자가정한 변수명으로 아무거나 변경가능
      setNumber((prev) => prev - 3);
      setNumber((prev) => prev - 2);
      setNumber((prev) => prev - 1);
    } else if (action === "down") {
      setNumber((prev) => prev - 3);
      setNumber((prev) => prev - 2);
      setNumber((prev) => prev - 1);
    }
    setAction("");// 액션초기화
  }, [action]);

  useEffect(() => {
    console.log("number chang:", number);
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

export default MyuseStateSync003;
