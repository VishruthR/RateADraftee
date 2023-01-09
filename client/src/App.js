import React from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultWrapper } from "./DefaultWrapper";
import { Home } from "./Home";
import { PlayerView } from "./PlayerView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DefaultWrapper Content={<Home />} />} />
        <Route
          path="/player/:playerId"
          element={<DefaultWrapper Content={<PlayerView />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
