import React, { useState } from "react";
import Left01 from "./Left01";
import Right01 from "./Right01";
import { UserContext } from "./contexts/UserContext";

import "./MyuseContext01.css";
import { ThemeContext } from "./contexts/ThemeContext";

const MyuseContext01 = () => {
  const [name, setName] = useState("홍길동");
  const [number, setNumber] = useState(0);

  const onHandleName = () => {
    setName(name === "홍길동" ? "여진구" : "홍길동");
  };

  const onHandleIncrease = () => {
    setNumber((number) => number + 1);
  };

  const onHandleDecrease = () => {
    setNumber((number) => number - 1);
  };

  return (
    <div id="page">
      <h1>page</h1>
      <div className="grid">
        <UserContext.Provider value={{ name, setName, onHandleName }}>
          <ThemeContext.Provider value={{ number, setNumber, onHandleIncrease, onHandleDecrease }}>
            <Left01 />
            <Right01 />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default MyuseContext01;
