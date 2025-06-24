import React, { useContext } from "react";
import Right03 from "./Right03";
import { UserContext } from "./contexts/UserContext";
import { ThemeContext } from "./contexts/ThemeContext";

const Right02 = () => {
  //useConext(Context.Provider종류)
  const { name } = useContext(UserContext);
  const { number } = useContext(ThemeContext);
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
