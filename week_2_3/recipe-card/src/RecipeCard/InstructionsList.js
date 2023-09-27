import React from "react";
import styles from "./RecipeCard.module.css";

export default function InstructionsList(prop) {
  // props = properties; go from parent to children

  const { instructions } = prop;

  return (
    <div className={styles.instructionsContainer}>
      <h3>Instructions</h3>
      <ol className={styles.instructionsList}>
        {instructions.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ol>
    </div>
  );
}
