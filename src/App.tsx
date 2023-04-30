import React from "react";
import "./App.css";
import { Prompt } from "./components/prompt";
import Airtable from "airtable";
import { Routes, Route, Navigate } from "react-router-dom";
import { Players } from "features/players";

var base = new Airtable({
  apiKey:
    "patxJAheQLScdh7Rw.e9736efe5569d24c3f4d7517890877c873ac3a2ee5a1a975db90263b9c743f62",
}).base("app9cX0FJtk3FkpBi");

//add redux?
const App = () => {
  return (
    <div>
      <p>main</p>
      <Routes>
        <Route path="/home" element={<Players />} />
        <Route path="/play" element={<Prompt base={base} />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
};

export default App;
