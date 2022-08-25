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

  function alertMessage() {
    alert('Euro 2020 here we come 🤩')
  }


  return (
    <div className="Main">
      <h3>England Football Team Player Selector System (EFTPSS 🄒):</h3>
      <div className="Content">
        {number && (
          <>
            <span>
              The next name on the teamsheet is: {names[number].name}{" "}
              {names[number].emoji}{" "}
              <img src = {names[number].imgUrl} alt={names[number].name}/> 
            </span>
          </>
        )}
      </div>
      <button onClick={handleClick} type="button">
        {number
          ? "Click me to pick someone else 🔁"
          : "Click me to pick your first player 1️⃣"
        }
      </button>
      {number && (
        <button onClick={handleReset} type="button">
          Did you break it? Reset everything 🛑
        </button>
      )}
      
      <div className="TournamentButton">
        { 
         <button onClick= {alertMessage} type="button">Go to the tournament ⚽️</button>
        }
      </div>
    </div>
  );
};

export default Main;

