/*

this is where we import our recipe card
and use it

*/

import React from "react";
import RecipeCard from "./RecipeCard";
import { RECIPE_LIST } from "./RecipeCard/recipe-data.js";
import styles from "./RecipeCard/RecipeCard.module.css";

function App() {
  return (
    <>
      <div className={styles.pageHeader}>
        <h1>Dynamic Web Cookbook</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {RECIPE_LIST.map((recipe, i) => (
          <RecipeCard recipe={recipe} key={i} />
        ))}
      </div>
    </>
  );
}

export default App;
