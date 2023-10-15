import React from "react";
import styles from "./SilicaPacket.module.css";

export default function Text(prop) {
  const { proses } = prop;

  return (
    <div className={styles.textContainer}>
      {proses.map((prose, i) => (
        <>
          <p className={styles.prose}>{prose}</p>
        </>
      ))}
    </div>
  );
}
