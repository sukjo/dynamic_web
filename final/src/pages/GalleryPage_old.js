import { useState, useEffect } from "react";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../lib/firebase";
import styles from "./pages.module.css";
import cx from "classnames";
import { v4 } from "uuid";

export default function Gallery({ isModalOpen }) {
  const [imageGallery, setImageGallery] = useState([]);
  const galleryPageCX = cx(styles.galleryPage, {
    [styles.blurred]: isModalOpen,
  });

  const imageListRef = ref(storage, "images/");

  useEffect(() => {
    listAll(imageListRef)
      .then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageGallery((prev) => [...prev, url]);
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={galleryPageCX}>
      <div className={styles.curioContainer}>
        {imageGallery.map((url) => {
          return (
            <div
              className={styles.curioUnit}
              style={{ backgroundImage: `url("${url}")` }}
              key={v4()}
            />
          );
          // return <img src={url} key={url} />;
        })}
        {""}
      </div>
    </div>
  );
}
