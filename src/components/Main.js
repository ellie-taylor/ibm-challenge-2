import React, { useState } from "react";
import names from "../static/names";

const Main = () => {
  const [number, setNumber] = useState();
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleClick = () => {
    setNumber(getRandomInt(1, 8));
  };
  const handleReset = () => {
    setNumber(null);
  };
  return (
    <div className="Main">
      <h3>England Football Team Player Selector System (EFTPSS 🄒):</h3>
      <div className="Content">
        {number && (
          <>
            <span>
              The next name on the teamsheet is: {names[number].name}{" "}
              {names[number].emoji}
            </span>
          </>
        )}
      </div>
      <button onClick={handleClick} type="button">
        {number
          ? "Click me to pick someone else 🔁"
          : "Click me to pick your first player 1️⃣"}
      </button>
      {number && (
        <button onClick={handleReset} type="button">
          Did you break it? Reset everything 🛑
        </button>
      )}
      <div className="TournamentButton">
        {/* 💰: You can add a button that looks something like: 
         <button type="button">Euro 2020 here we come 🤩</button>
      */}
      </div>
    </div>
  );
};

export default Main;
