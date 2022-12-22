import { useEffect, useState, useMemo } from "react";
import React from "react";
import { Recipe } from "../../lib";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3100/api/recipes`)
      .then((res) => res.json())
      .then((result) => {
        setRecipes(result);
      });
  }, []);

  return <div>{recipes.map((recipe) => recipe.name)}</div>;
};

export default AllRecipes;
