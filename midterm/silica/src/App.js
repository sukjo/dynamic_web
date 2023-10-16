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
  move,
} from "react-grid-dnd";

const packListWithIds = PACKET_LIST.map((item) => ({
  ...item,
  id: Math.round(Math.random() * 1000),
}));

function App() {
  const [gridItems, setGridItems] = useState(packListWithIds);

  // const packListWithIds = [...gridItems].map((item) => ({
  //   ...item,
  //   id: Math.random() * 1000,
  // }));

  // useEffect(() => {
  //   setGridItems(randomIDs);
  //   console.log("items have been assigned random IDs");
  // }, []); // empty dependency array ensures that useEffect only runs once upon first render

  const onChange = (sourceId, sourceIndex, targetIndex, targetId) => {
    // console.log(gridItems[8]);
    console.log("Item sourceId :", sourceId); // items (source container ID)
    console.log("Item sourceIndex :", sourceIndex); // 6 (index or position of the source element within its container)
    console.log("Item targetIndex :", targetIndex); // 5 (the index or position where the source element will be dropped)
    console.log("Item targetId :", targetId); // undefined (unique identifier of the target container)

    // if you are dropping the item onto another container
    if (targetId) {
      const result = move(
        gridItems[sourceId],
        gridItems[targetId],
        sourceIndex,
        targetIndex
      );

      return setGridItems({
        ...gridItems,
        [sourceId]: result[0],
        [targetId]: result[1],
      });
    }
    console.log("items have been swapped");

    const result = swap(gridItems[sourceId], sourceIndex, targetIndex);
    return setGridItems({
      ...gridItems,
      [sourceId]: result,
    });

    console.log("gridItems[sourceId] :", gridItems[sourceId]); // undefined
    console.log("gridItems[targetId] :", gridItems[targetId]); // whole blob
  };

  return (
    <div className={styles.container}>
      <div className={styles.watermark}>
        <span>dry goods preservation agents</span>
      </div>
      <GridContextProvider onChange={onChange}>
        <GridDropZone
          className={styles.mainDropZone}
          id="items" // unique ID used by react-grid-dnd
          boxesPerRow={4}
          rowHeight={250}
          style={{ height: 250 * Math.ceil(gridItems.length / 4) }}
        >
          {gridItems.map((item) => (
            <GridItem className={styles.gridItem} key={item.id}>
              <SilicaPacket packet={item} />
            </GridItem>
          ))}
        </GridDropZone>
      </GridContextProvider>
    </div>
  );
}

export default App;
