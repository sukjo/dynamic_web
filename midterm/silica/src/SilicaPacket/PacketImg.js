import React, { useState } from "react";
import styles from "./SilicaPacket.module.css";

export default function PacketImg(props) {
  const { packet } = props;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const onDragStart = (ev) => {
    ev.preventDefault();
  };

  const toggleImage = () => {};

  return (
    <div className={styles.imageContainer}>
      <div
        className={styles.image}
        style={{
          backgroundImage: isHovered
            ? `url("${packet.imgSrc_back}")`
            : `url("${packet.imgSrc_front}")`,
        }}
        onDragStart={onDragStart}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
    </div>
  );
}
