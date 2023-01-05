import { useEffect, useState, useMemo } from "react";
import React from "react";
import { Recipe } from "../../lib";
import { useParams } from "react-router-dom";

// interface RecipeProps {
//   recipe?: Recipe;
// }

const RecipeById: React.FC<any> = () => {
  const [recipe, setRecipe] = useState<Recipe>();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3100/api/recipes/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setRecipe(result);
      });
  }, []);

  return (
    <div className="recipe-container">
      <div>{recipe?.name}</div>
      <div className="time-container">
        <div>
          <label>Preparation time</label>
          <div>{recipe?.prepTime}</div>
        </div>
        <div>
          <label>Cooking time</label>
          <div>{recipe?.cookTime}</div>
        </div>
        <div>
          <label>Waiting time</label>
          <div>{recipe?.waitTime}</div>
        </div>
      </div>
      <label>Calories</label>
      <div>{recipe?.calories}</div>
      <label>Servings</label>
      <div>{recipe?.servings}</div>
      <div className="instructions-ingredients-container">
        <div className="instructions">{recipe?.instructions}</div>
        <div className="ingredients">
          {recipe?.ingredients.map((i: any) => (
            <div>{i}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeById;
