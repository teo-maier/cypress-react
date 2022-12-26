import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Recipe } from "../../lib";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import "./recipes.css";
import { ROUTES } from "../../constants/routes";

const AllRecipes = () => {
  const navigate = useNavigate();
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
            <div className="recipe-tags">
              {recipe.tags.map((i) => (
                <Card.Text>{i}</Card.Text>
              ))}
            </div>
            <Button
              variant="outline-primary"
              style={{ position: "unset", color: "none" }}
              onClick={() =>
                navigate(
                  `${ROUTES.RECIPES}/${ROUTES.VIEW_ROUTE(`${recipe.id}`)}`
                )
              }
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
