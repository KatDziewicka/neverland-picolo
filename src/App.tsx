import "./App.css";
import { Prompt } from "features/prompt";
import Airtable from "airtable";
import { Routes, Route, Navigate } from "react-router-dom";
import { Players } from "features/players";
import GameContextProvider from "app/game-context-provider";
import { GameOver } from "features/game-over";

const { REACT_APP_AIRTABLE_API_KEY = "", REACT_APP_AIRTABLE_BASE = "" } =
  process.env;

var base = new Airtable({
  apiKey: REACT_APP_AIRTABLE_API_KEY,
}).base(REACT_APP_AIRTABLE_BASE);

//add redux?
const App = () => {
  return (
    <GameContextProvider>
      <Routes>
        <Route path="/home" element={<Players />} />
        <Route path="/play" element={<Prompt base={base} />} />
        <Route path="/game-over" element={<GameOver />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </GameContextProvider>
  );
};

export default App;
