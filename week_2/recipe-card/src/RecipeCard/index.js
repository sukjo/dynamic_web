import React from "react";
import { RECIPE } from "./recipe-data.js"; // curly braces because might be more than one constant in the file
// import RECIPE_IMG from "../assets/140614_Yagyu_Iris_Garden_Nara_Japan07s.jpg";
import Card from "./Card.js";
import RecipeImg from "./RecipeImg.js";
import RecipeInfo from "./RecipeInfo.js";
import IngredientsList from "./IngredientsList.js";
import InstructionsList from "./InstructionsList.js";
import "./recipecard.css";

export default function RecipeCard() {
  // this combines declaring app + exporting it in one line

  return (
    <Card>
      <RecipeImg imgSrc={RECIPE.imgSrc} imgAlt={RECIPE.imgAlt} />
      <div className="textContainer">
        <div class="titleContainer">
          <RecipeInfo title={RECIPE.title} description={RECIPE.description} />
        </div>
        <div className="listsContainer">
          <IngredientsList ingredients={RECIPE.ingredients} />
          <InstructionsList instructions={RECIPE.instructions} />
        </div>
      </div>
    </Card>
  );
}
