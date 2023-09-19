import React from "react";

export default function RecipeImg(props) {
  const { imgSrc, imgAlt } = props;
  return <img src={imgSrc} alt={imgAlt}></img>;
}
