import React from "react";
import styles from "./SilicaPacket.module.css";

export default function PacketImg(props) {
  const { imgSrc, imgAlt } = props;

  const onDragStart = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className={styles.imageContainer}>
      <img src={imgSrc} alt={imgAlt} onDragStart={onDragStart}></img>
    </div>
  );
}
