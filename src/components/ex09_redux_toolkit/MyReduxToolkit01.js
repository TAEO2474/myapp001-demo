import React from "react";
import Left01 from "./Left01";
import Right01 from "./Right01";

import "./MyReduxToolkit01.css";

const MyReduxToolkit01 = () => {
  return (
    <div id="page">
      <h1>page</h1>
      <div className="grid">
        <Left01 />
        <Right01 />
      </div>
    </div>
  );
};

export default MyReduxToolkit01;
