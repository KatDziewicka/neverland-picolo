import { GameContext } from "app/game-context";
import { useContext, useState } from "react";
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
  const { players, setPlayers, setRound } = useContext(GameContext);

  return (
    // {/* // TODO this shouldn't be called App-header */}
    <div className="App-header">
      <p>Welcome to Neverland Picolo</p>
      <p>Who's playing?</p>
      {theGroup.map(
        (name) =>
          !players.includes(name) && (
            <button
              key={`add-${name}`}
              onClick={() => setPlayers && setPlayers([...players, name])}
            >
              {name}
            </button>
          )
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPlayers && setPlayers([...players, newPlayerName]);
        }}
      >
        <input
          placeholder="Type the name of a player..."
          onChange={(e) => setNewPlayerName(e.target.value)}
        />
        <input type="submit" value="add" />
      </form>
      <button onClick={() => setPlayers && setPlayers([])}>Clear</button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        {players.map((player) => (
          <p>{player}</p>
        ))}
      </div>
      <Link to="/play">
        <button onClick={() => setRound && setRound(0)}>PLAY</button>
      </Link>
    </div>
  );
};

export default Players;
