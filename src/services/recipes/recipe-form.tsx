import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { Recipe } from "../../lib";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const [newRecipe, setNewRecipe] = useState<Recipe>();

  const handleSubmit = (e: any) => {
    const body = e.target.body.value;
    console.log(body);
    fetch(`http://localhost:3100/api/recipes/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setNewRecipe(result);
        navigate(`${ROUTES.DASHBOARD}`);
      });
  };

  return (
    <div className="container contact-form">
      {/* <div className="contact-image">
        <img
          src="https://play-lh.googleusercontent.com/3L30Tsrmfd4JXDHEJmFk4tdYCqXVI5lZ4Ya-6lyKgGadgPxMwLwi3obg7HDqFXxjYPA"
          alt="rocket_contact"
        />
      </div> */}
      <form onSubmit={handleSubmit}>
        <h3>Create your own recipe</h3>
        <div className="row">
          <div className="col-md-6 form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="prepTime"
                className="form-control"
                placeholder="Preparation time"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="waitTime"
                className="form-control"
                placeholder="Waiting time"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="cookTime"
                className="form-control"
                placeholder="Cooking time"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="servings"
                className="form-control"
                placeholder="Number of servings"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="calories"
                className="form-control"
                placeholder="Calories"
              />
            </div>
          </div>
          <div className="col-md-6 form">
            <div className="form-group">
              <textarea
                name="ingredients"
                className="form-control"
                placeholder="Ingredients"
              ></textarea>
            </div>
            <div className="form-group">
              <textarea
                name="tags"
                className="form-control"
                placeholder="Tags"
              ></textarea>
            </div>
            <div className="form-group">
              <textarea
                name="instructions"
                className="form-control"
                placeholder="Instructions"
              ></textarea>
            </div>
          </div>
          <div className="button-recipe">
            <Button
              variant="outline-warning"
              className="button"
              type="submit"
              //   onClick={trigger()}
            >
              Create recipe
            </Button>
            {/* <input type="submit" value="Submit" /> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateRecipe;
