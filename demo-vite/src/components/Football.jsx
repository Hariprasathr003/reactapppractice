import { Tabbutton } from "./Tabbutton";
import { footballplayer } from "../cricketdata";
import { useState } from "react";

import "./css/Football.css";

export function Football() {
  const [selectedFootballPlayer, setSelectedFootballPlayer] = useState("Messi");

  // console.log(setSelectedFootballPlayer, "settttttttt");
  // console.log(typeof selectedFootballPlayer, "setttttt");

  function handleSelect(playerName) {
    setSelectedFootballPlayer(playerName);
  }

  return (
    <>
      <section className="footballsection">
        <h1>Football Players</h1>
        <menu>
          <Tabbutton
            isSelected={selectedFootballPlayer === "Messi"}
            onSelect={() => handleSelect("Messi")}
          >
            Messi
          </Tabbutton>
          <Tabbutton
            isSelected={selectedFootballPlayer === "Ronaldo"}
            onSelect={() => handleSelect("Ronaldo")}
          >
            Ronaldo
          </Tabbutton>
          <Tabbutton
            isSelected={selectedFootballPlayer === "Neymar"}
            onSelect={() => handleSelect("Neymar")}
          >
            Neymar
          </Tabbutton>
        </menu>

        <div className="football">
          <li>
            <img src={footballplayer[selectedFootballPlayer].image} alt="..." />
            <h1>{footballplayer[selectedFootballPlayer].name}</h1>
            <p>{footballplayer[selectedFootballPlayer].Copaleague}</p>
          </li>
        </div>

        {/* <p>{selectedFootballPlayer}</p> */}
      </section>
    </>
  );
}
