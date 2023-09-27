import React from "react";
import styles from "./RecipeCard.module.css";

export default function RecipeImg(props) {
  const { imgSrc, imgAlt } = props;
  return <img src={imgSrc} alt={imgAlt}></img>;
}
