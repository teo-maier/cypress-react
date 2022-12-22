import { useEffect, useState, useMemo } from "react";
import React from "react";
import { Recipe } from "../../lib";

const RecipeById = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    for (let i = 1; i <= 3; i++) {
      fetch(`http://localhost:3100/api/recipes/${i}`)
        .then((res) => res.json())
        .then((result) => {
          setRecipes((prevUsers: any) => [...prevUsers, result]);
        });
    }
  }, []);

  return <div>{recipes.map(recipe => recipe.name)}</div>;
};

export default RecipeById;
