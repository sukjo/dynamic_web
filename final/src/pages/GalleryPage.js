import { useState, useEffect } from "react";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage, db } from "../lib/firebase";
import styles from "./pages.module.css";
import cx from "classnames";
import { v4 } from "uuid";
import { collection, getDocs, query } from "firebase/firestore";

export default function Gallery({ isModalOpen }) {
  const [allDocuments, setAllDocuments] = useState([]);
  const galleryPageCX = cx(styles.galleryPage, {
    [styles.blurred]: isModalOpen,
  });
  const username = JSON.parse(localStorage.getItem("user"));

  // const imageListRef = ref(storage, "images/");

  useEffect(() => {
    const fetchDocuments = async () => {
      const q = query(collection(db, "curios"));
      const querySnapshot = await getDocs(q);

      const downloadURLs = querySnapshot.docs.map(async (doc) => {
        const imageRef = ref(storage, doc.data().imageUrl);
        const imageURL = await getDownloadURL(imageRef);
        return { id: doc.id, ...doc.data(), imageURL };
      });

      const allURLs = await Promise.all(downloadURLs);
      setAllDocuments(allURLs);

      // querySnapshot.forEach((doc) => {
      //   console.log(
      //     doc.data().title,
      //     doc.data().description,
      //     doc.data().imageUrl
      //   );
      // });
    };
    fetchDocuments();
  }, []);

  const [hoverStates, setHoverStates] = useState(
    Array(allDocuments.length).fill(false)
  );

  // const curioBGCX = cx(styles.curioBG, {
  //   [styles.hovered]: hoverStates[index],
  // });

  const handleMouseEnter = (index) => {
    setHoverStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = true;
      return newStates;
    });
  };

  const handleMouseLeave = (index) => {
    setHoverStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };

  return (
    <div className={galleryPageCX}>
      <div className={styles.curiosContainer}>
        {allDocuments && allDocuments.length > 0 ? (
          allDocuments.map((doc, index) => (
            <div key={doc.id} className={styles.curioUnit}>
              <h3>{doc.title}</h3>
              <div
                className={cx(styles.curioBG, {
                  [styles.hovered]: hoverStates[index],
                })}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div
                  className={styles.curioImage}
                  style={{
                    backgroundImage: `url("${doc.imageURL})`,
                  }}
                  key={doc.id}
                />
                <p>{doc.description}</p>
                <p>{doc.user}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No curios exist yet!</p>
        )}
      </div>
    </div>
  );
}
