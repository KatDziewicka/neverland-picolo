import { Link } from "react-router-dom";

const GameOver = () => {
  return (
    <div className="App-header">
      <h1>Game Over!</h1>
      <Link to="/home">
        <button>PLAY AGAIN</button>
      </Link>
    </div>
  );
};

export default GameOver;
