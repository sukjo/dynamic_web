import React from "react";
import styles from "./RecipeCard.module.css";
import UserRating from "./UserRating.js";

export default function RecipeInfo(props) {
  const { title, description } = props;

  return (
    <>
      <div className={styles.headingContainer}>
        <h1>{title}</h1>
        <UserRating />
      </div>
      <p>{description}</p>
    </>
  );
}
