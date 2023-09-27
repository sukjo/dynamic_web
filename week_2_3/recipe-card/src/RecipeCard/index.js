import React from "react";
// import { recipe } from "./recipe-data.js"; // curly braces because might be more than one constant in the file
// import recipe_IMG from "../assets/140614_Yagyu_Iris_Garden_Nara_Japan07s.jpg";
import Card from "./Card.js";
import RecipeImg from "./RecipeImg.js";
import RecipeInfo from "./RecipeInfo.js";
import IngredientsList from "./IngredientsList.js";
import InstructionsList from "./InstructionsList.js";
import styles from "./RecipeCard.module.css";

export default function RecipeCard(props) {
  // this combines declaring app + exporting it in one line

  const recipe = props.recipe;

  return (
    <Card>
      <RecipeImg imgSrc={recipe.imgSrc} imgAlt={recipe.imgAlt} />
      <div className={styles.textContainer}>
        {/* <div className="textContainer"> */}
        <div className={styles.titleContainer}>
          <RecipeInfo title={recipe.title} description={recipe.description} />
        </div>
        <div className={styles.listsContainer}>
          <IngredientsList ingredients={recipe.ingredients} />
          <InstructionsList instructions={recipe.instructions} />
        </div>
      </div>
    </Card>
  );
}
