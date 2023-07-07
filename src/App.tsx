import "./App.css";
import { Prompt } from "features/prompt";
import Airtable from "airtable";
import { Routes, Route, Navigate } from "react-router-dom";
import { Players } from "features/players";
import GameContextProvider from "app/game-context-provider";
import { GameOver } from "features/game-over";

var base = new Airtable({
  apiKey:
    "patxJAheQLScdh7Rw.e9736efe5569d24c3f4d7517890877c873ac3a2ee5a1a975db90263b9c743f62",
}).base("app9cX0FJtk3FkpBi");

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
