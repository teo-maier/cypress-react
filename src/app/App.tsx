import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import Navbar from "../components/navbar/navbar";
import { ROUTES } from "../constants/routes";
import AllRecipes from "../services/recipes/get-all-recipes";
import RecipeById from "../services/recipes/get-recipe";
import AllUsers from "../services/users/get-all-users";
import UserById from "../services/users/get-user";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={`${ROUTES.DASHBOARD}`} element={<Home />} />
        <Route path={`${ROUTES.RECIPES}`} element={<AllRecipes />} />
        <Route
          path={`${ROUTES.RECIPES}/${ROUTES.VIEW_ROUTE(":id")}`}
          element={<RecipeById />}
        />
        <Route path={`${ROUTES.HOW_TO}`} element={<h1>How to</h1>} />
        <Route path={`${ROUTES.LIFESTYLE}`} element={<h1> Lifestyle</h1>} />
        <Route path={`${ROUTES.BLOG}`} element={<h1>Blog</h1>} />
      </Routes>
    </div>
  );
}

export default App;
