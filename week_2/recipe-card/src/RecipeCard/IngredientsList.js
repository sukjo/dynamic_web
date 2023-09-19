import React from "react";

export default function IngredientsList(prop) {
  const { ingredients } = prop;
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
        {/* mapping is like a for loop
          whenever you map, variable name (i) is your choice
          but index is always the second parameter */}
      </ul>
    </div>
  );
}
