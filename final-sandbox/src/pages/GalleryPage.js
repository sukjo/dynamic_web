import { useState, useEffect } from "react";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../lib/firebase";
import styles from "./pages.module.css";
import cx from "classnames";
import { GridContextProvider, GridDropZone, GridItem } from "react-grid-dnd";
import Image from "../components/Image";

export default function Gallery({ isModalOpen }) {
  const [imageGallery, setImageGallery] = useState([]);
  const imageListRef = ref(storage, "images/");
  const galleryPageCX = cx(styles.galleryPage, {
    [styles.blurred]: isModalOpen,
  });

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    listAll(imageListRef)
      .then((response) => {
        response.items.forEach((item) => {
          // console.log(item);
          getDownloadURL(item).then((url) => {
            setImageGallery((prev) => [...prev, url]);
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Add a window resize event listener
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getResponsiveGridStyle = (size) => {
    switch (true) {
      case size < 500:
        return 2;
      case size < 600:
        return 3;
      case size < 900:
        return 4;
      default:
        return 5;
    }
  };

  const responsiveGridStyle = getResponsiveGridStyle(windowSize.width);

  //   return (
  //     <div className={galleryPageCX}>
  //       <GridContextProvider>
  //         <GridDropZone
  //           className={styles.dropZone}
  //           id="items" // unique ID used by react-grid-dnd
  //           boxesPerRow={responsiveGridStyle}
  //           rowHeight={250}
  //           style={{ height: 250 * Math.ceil(25 / 4) }}
  //         >
  //           {imageGallery.map((url) => {
  //             <GridItem className={styles.gridItem}>
  //               <Image url={url} />;
  //             </GridItem>;
  //           })}
  //         </GridDropZone>
  //       </GridContextProvider>
  //     </div>
  //   );

  return (
    <>
      {imageGallery.map((url) => {
        return <img src={url} />;
      })}
    </>
  );
}
