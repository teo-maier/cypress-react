import React from "react";
import AllRecipes from "../services/recipes/get-all-recipes";
import AllUsers from "../services/users/get-all-users";
import UserById from "../services/users/get-user";
import "./App.css";

export function App() {
  return (
    <div className="App">
        <UserById/>
        <AllUsers/>
        <AllRecipes/>
    </div>
  );
}

export default App;
