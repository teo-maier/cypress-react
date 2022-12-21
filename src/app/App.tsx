import React from "react";
import GetAllUsers from "../services/users/getAllUsers";
import "./App.css";

export function App() {
  return (
    <div className="App">
        <GetAllUsers/>
    </div>
  );
}

export default App;
