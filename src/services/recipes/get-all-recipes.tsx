import { useEffect, useState, useMemo } from "react";
import React from "react";
import { Recipe } from "../../lib";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import "./recipes.css";


const AllRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3100/api/recipes`)
      .then((res) => res.json())
      .then((result) => {
        setRecipes(result);
      });
  }, []);

  return (
    <div className="main-recipes-container">
      {recipes.map((recipe) => (
        <Card style={{ width: "18rem", marginTop: "150px" }}>
          <Card.Img
            variant="top"
            src="https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg"
          />
          <Card.Body>
            <Card.Title>{recipe.name}</Card.Title>
            <Card.Text>{recipe.tags}</Card.Text>
            <Button
              variant="outline-primary"
              style={{ position: "unset", color: "none" }}
            >
              See recipe
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AllRecipes;
