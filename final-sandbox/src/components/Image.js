import styles from "./components.module.css";

export default function Image({ url }) {
  return (
    <div className={styles.imageContainer}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url("${url}")` }}
      ></div>
    </div>
  );
}
