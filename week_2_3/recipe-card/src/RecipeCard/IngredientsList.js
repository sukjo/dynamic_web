import React from "react";
import styles from "./RecipeCard.module.css";

export default function IngredientsList(prop) {
  const { ingredients } = prop;
  return (
    <div className={styles.ingredientsContainer}>
      <h3>Ingredients</h3>
      <ul className={styles.ingredientsList}>
        {ingredients.map((ingredient, index) => (
          <>
            <li key={index}>
              {/* {ingredient} */}
              <span className={styles.measure}>{ingredient.measure}</span>
              <span className={styles.name}>{ingredient.name}</span>
            </li>
          </>
        ))}
        {/* mapping is like a for loop
          whenever you map, variable name (i) is your choice
          but index is always the second parameter */}
      </ul>
    </div>
  );
}
