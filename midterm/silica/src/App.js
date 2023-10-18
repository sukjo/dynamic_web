import { useState, useEffect } from "react";
import SilicaPacket from "./SilicaPacket";
import { PACKET_LIST } from "./SilicaPacket/packet-data.js";
import styles from "./SilicaPacket/SilicaPacket.module.css";
import "./styles/global.css";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";
import { generateUID } from "./utils.js";

function App() {
  const [gridItems, setGridItems] = useState([]);

  useEffect(() => {
    const shuffledGridItems = [...PACKET_LIST, ...PACKET_LIST]
      .sort(() => Math.random() - 0.5)
      .map((item) => ({ ...item, id: generateUID() }));
    setGridItems(shuffledGridItems);
    console.log("items have been shuffled");
  }, []);

  const handleChange = (sourceId, sourceIndex, targetIndex, targetId) => {
    const result = swap(gridItems, sourceIndex, targetIndex);
    setGridItems(result);
    console.log(`items ${sourceIndex} and ${targetIndex} have been swapped`);
  };

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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

  const handleDoubleClick = () => {
    // build on this in next step
  };

  return (
    <>
      <div className={styles.titleContainer}>
        <h1>⊛ Dry Goods Preservation Agents</h1>
      </div>
      <div className={styles.packetContainer}>
        <div className={styles.watermark}>
          <span>have a good day</span>
        </div>
        <GridContextProvider onChange={handleChange}>
          <GridDropZone
            className={styles.mainDropZone}
            id="items" // unique ID used by react-grid-dnd
            boxesPerRow={responsiveGridStyle}
            rowHeight={250}
            style={{ height: 250 * Math.ceil(gridItems.length / 4) }}
          >
            {gridItems.map((item) => (
              <GridItem
                className={styles.gridItem}
                key={item.id}
                ondblclick={handleDoubleClick}
              >
                <SilicaPacket packet={item} />
              </GridItem>
            ))}
          </GridDropZone>
        </GridContextProvider>
      </div>
    </>
  );
}

export default App;

// <GridItem className={styles.gridItem} key={generateUID()}>
