import React from "react";
import styles from "./SilicaPacket.module.css";

export default function Text(prop) {
  const { caption } = prop;

  return (
    <div className={styles.textContainer}>
      <p className={styles.caption}>{caption}</p>
    </div>
  );
}

// import { generateUID } from "../utils.js";
// {
//   proses.map((prose) => (
//     <p className={styles.prose} key={generateUID()}>
//       {prose}
//     </p>
//   ));
// }
