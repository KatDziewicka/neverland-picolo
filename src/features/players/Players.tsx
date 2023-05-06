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
    <div
      style={{
        backgroundColor: "#815794",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "2vh",
        alignItems: "center",
        justifyItems: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
      }}
    >
      <p>Welcome to Neverland Picolo</p>
      <p>Who's playing?</p>
      <div
        style={{
          height: "40%",
          width: "45%",
          display: "flex",
          gap: "5px",
        }}
      >
        {theGroup.map(
          (name) =>
            !players.includes(name) && (
              <button
                key={`add-${name}`}
                onClick={() => setPlayers && setPlayers([...players, name])}
                style={{ height: "35px", width: "80px", borderRadius: "12px" }}
              >
                {name}
              </button>
            )
        )}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPlayers && setPlayers([...players, newPlayerName]);
        }}
        style={{ display: "flex", gap: "10px", marginTop: "5vh" }}
      >
        <input
          placeholder="Type the name of a player..."
          onChange={(e) => setNewPlayerName(e.target.value)}
          style={{ minWidth: "25vh", padding: "10px" }}
        />
        <input
          type="submit"
          value="ADD"
          style={{ minWidth: "10vh", padding: "10px" }}
        />
      </form>
      <div
        style={{
          height: "40%",
          width: "45%",
          display: "flex",
          gap: "5px",
        }}
      >
        {players.map((player) => (
          <button
            key={`remove-${player}`}
            onClick={() =>
              setPlayers &&
              setPlayers(players.filter((name) => name !== player))
            }
            style={{ height: "35px", width: "80px", borderRadius: "12px" }}
          >
            {player + " X"}
          </button>
        ))}
      </div>
      <button
        onClick={() => setPlayers && setPlayers([])}
        style={{
          width: "30vh",
          height: "5vh",
          backgroundColor: "#ED6F84",
          borderRadius: "12px",
          color: "white",
        }}
      >
        CLEAR
      </button>
      {/* TODO there's a link on top of the button */}
      <Link to="/play">
        <button
          style={{
            width: "30vh",
            height: "10vh",
            backgroundColor: "#8F7C97",
            borderRadius: "12px",
            color: "white",
          }}
          onClick={() => setRound && setRound(0)}
        >
          PLAY
        </button>
      </Link>
    </div>
  );
};

export default Players;
