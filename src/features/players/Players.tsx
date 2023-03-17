import React, { useState } from "react";
import "./App.css";

const Players = () => {
  const [playerName, setPlayerName] = useState("");
  const [playersList, setPlayersList] = useState<string[]>([]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Neverland Picolo</p>
        <p>Who's playing?</p>
        <p>{playersList[0]}</p>
        <form>
          <input
            placeholder="Type the name of a player..."
            // onChange={(e: string) => setPlayerName(e)}
          />
          <input
            type="submit"
            value="add"
            onClick={() => setPlayersList([playerName])}
          />
        </form>
      </header>
    </div>
  );
};

export default Players;
