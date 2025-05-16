import { Firstcomponent } from "./components/Firstcomponent.jsx";
import "./App.css";
import "./components/css/editbutton.css";
import { Gameboard } from "./components/editgame/Gameboard.jsx";

import EditButton from "./components/editgame/EditButton.jsx";
import { Cricketplayer } from "./components/Cricketplayer.jsx";
import { Football } from "./components/Football.jsx";
import { useState } from "react";
function App() {
  const [clickBoard, setClickBoard] = useState();

  function handleClickboard() {
    setClickBoard((currActive) => (currActive === "X" ? "O" : "X"));
  }
  return (
    <>
      <Firstcomponent />
      <Cricketplayer />
      <Football />

      <div className="editbox">
        <h1>XO GAME</h1>
        <ul>
          <EditButton
            intialname="player1"
            Symbol="X"
            isActive={clickBoard==="X"}
          ></EditButton>
          <EditButton
            intialname="player2"
            Symbol="O"
            isActive={clickBoard==="O"}
          ></EditButton>
        </ul>
        <Gameboard onSelectgameboard={handleClickboard} activePlayer={clickBoard}/>
      </div>
    </>
  );
}

export default App;
