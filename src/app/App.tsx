import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import Navbar from "../components/navbar/navbar";
import AllRecipes from "../services/recipes/get-all-recipes";
import AllUsers from "../services/users/get-all-users";
import UserById from "../services/users/get-user";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<AllRecipes />} />
        <Route path="/howto" element={<h1>How to</h1>} />
        <Route path="/lifestyle" element={<h1> Lifestyle</h1>} />
        <Route path="/blog" element={<h1>Blog</h1>} />
      </Routes>
    </div>
  );
}

export default App;
