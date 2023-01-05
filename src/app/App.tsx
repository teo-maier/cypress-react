import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import LanguageSwitcher from "../components/language-switcher/language-switcher";
import Navbar from "../components/navbar/navbar";
import { ROUTES } from "../constants/routes";
import AllRecipes from "../services/recipes/get-all-recipes";
import RecipeById from "../services/recipes/get-recipe";
import CreateRecipe from "../services/recipes/recipe-form";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <div className="language">
        <LanguageSwitcher />
      </div>
      <Routes>
        <Route path={`${ROUTES.MAIN}`} element={<Navbar />} />
        <Route
          path={`${ROUTES.DASHBOARD}`}
          element={
            <div>
              <Navbar />
              <Home />
            </div>
          }
        />
        <Route
          path={`${ROUTES.RECIPES}`}
          element={
            <div>
              <Navbar />
              <AllRecipes />
            </div>
          }
        />
        <Route
          path={`${ROUTES.RECIPES}/${ROUTES.NEW_RECIPE}`}
          element={
            <div>
              <Navbar />
              <CreateRecipe />
            </div>
          }
        />
        <Route
          path={`${ROUTES.RECIPES}/${ROUTES.VIEW_ROUTE(":id")}`}
          element={
            <div>
              <Navbar />
              <RecipeById />
            </div>
          }
        />
        <Route
          path={`${ROUTES.HOW_TO}`}
          element={
            <div>
              <Navbar />
              <h1>How to</h1>
            </div>
          }
        />
        <Route
          path={`${ROUTES.LIFESTYLE}`}
          element={
            <div>
              <Navbar />
              <h1> Lifestyle</h1>
            </div>
          }
        />
        <Route
          path={`${ROUTES.BLOG}`}
          element={
            <div>
              <Navbar />
              <h1>Blog</h1>
            </div>
          }
        />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
