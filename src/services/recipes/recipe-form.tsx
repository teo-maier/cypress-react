import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { Recipe } from "../../lib";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type FormValues = {
  id: number;
  name: string;
  prepTime: number;
  waitTime: number;
  cookTime: number;
  noServings: number;
  calories: number;
  ingredients: string;
  tags: Array<string>;
  instructions: string;
};

const CreateRecipe = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  // const [newRecipe, setNewRecipe] = useState<Recipe>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // const array = new Array();
    // array.push(data);
    // console.log(array)

    // fetch(`http://localhost:3100/api/recipes/new`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Credentials": "true",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setNewRecipe(result);
    //     result.send();
    //     // navigate(`${ROUTES.DASHBOARD}`);
    //   });

    axios
      .post("http://localhost:3100/api/recipes/new", {
        body: data,
      })
      .then((response) => {
        console.log(response.data);
        // Handle data
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container contact-form">
      <form onSubmit={handleSubmit(onSubmit)} target="_self">
        <h3>Create your own recipe</h3>
        <div className="row">
          <div className="col-md-6 form">
            <div className="form-group">
              <input
                id="id"
                type="number"
                className="form-control"
                placeholder="Id"
                {...register("id")}
              />
            </div>
            <div className="form-group">
              <input
                id="name"
                className="form-control"
                placeholder="Name"
                {...register("name")}
              />
            </div>
            <div className="form-group">
              <input
                id="prepTime"
                type="number"
                className="form-control"
                placeholder="Preparation time"
                {...register("prepTime")}
              />
            </div>
            <div className="form-group">
              <input
                id="waitTime"
                type="number"
                className="form-control"
                placeholder="Waiting time"
                {...register("waitTime")}
              />
            </div>
            <div className="form-group">
              <input
                id="cookTime"
                type="number"
                className="form-control"
                placeholder="Cooking time"
                {...register("cookTime")}
              />
            </div>
            <div className="form-group">
              <input
                id="noServings"
                type="number"
                className="form-control"
                placeholder="Number of servings"
                {...register("noServings")}
              />
            </div>
            <div className="form-group">
              <input
                id="calories"
                type="number"
                className="form-control"
                placeholder="Calories"
                {...register("calories")}
              />
            </div>
          </div>
          <div className="col-md-6 form">
            <div className="form-group">
              <textarea
                id="ingredients"
                className="form-control"
                placeholder="Ingredients"
                {...register("ingredients")}
              ></textarea>
            </div>
            <div className="form-group">
              <textarea
                id="tags"
                className="form-control"
                placeholder="Tags"
                {...register("tags")}
              ></textarea>
            </div>
            <div className="form-group">
              <textarea
                id="instructions"
                className="form-control"
                placeholder="Instructions"
                {...register("instructions")}
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
