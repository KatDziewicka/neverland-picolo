import React, { useState } from "react";
import { Link } from "react-router-dom";

const Players = () => {
  const theGroup = [
    "Rita",
    "Tomim",
    "Kasia",
    "Kalid",
    "Bea",
    "Zoobi",
    "Ad",
    "Cam",
    "Miro",
    "Tid",
    "Alice",
    "Elliot",
    "Imu",
  ];
  const [newPlayerName, setNewPlayerName] = useState("");
  const [playersList, setPlayersList] = useState<string[]>([]);

  return (
    // TODO this shouldn't be called App-header
    <div className="App-header">
      <p>Welcome to Neverland Picolo</p>
      <p>Who's playing?</p>
      {theGroup.map(
        (name) =>
          !playersList.includes(name) && (
            <button
              key={`add-${name}`}
              onClick={() => setPlayersList([...playersList, name])}
            >
              {name}
            </button>
          )
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPlayersList([...playersList, newPlayerName]);
        }}
      >
        <input
          placeholder="Type the name of a player..."
          onChange={(e) => setNewPlayerName(e.target.value)}
        />
        <input type="submit" value="add" />
      </form>
      <button onClick={() => setPlayersList([])}>Clear</button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        {playersList.map((player) => (
          <p>{player}</p>
        ))}
      </div>
      <Link to="/play">
        <button>PLAY</button>
      </Link>
    </div>
  );
};

export default Players;
