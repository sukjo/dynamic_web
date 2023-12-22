import { useState } from "react";
import styles from "./components.module.css";

export default function Thumbnail({ file }) {
  const [thumbnail, setThumbnail] = useState(null);

  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setThumbnail(reader.result);
    };
  } else {
    setThumbnail(null);
  }

  return <img alt="preview" src={thumbnail} className={styles.thumbnail} />;
}
