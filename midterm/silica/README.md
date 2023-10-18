# Midterm Documentation

## Draggable grid libraries

Tried using the GSAP draggle UI at first, but decided to go with react-grid-dnd and react-gesture-responder. This required me to set legacy peer deps as true in my config before installing the library successfully.

```bash
npm config set legacy-peer-deps true
```

```jsx
import { useEffect, useRef } from "react";
import styles from "./SilicaPacket.module.css";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

export default function PacketContainer(prop) {
  const PCRef = useRef(null);

  useEffect(() => {
    const el = PCRef.current;

    if (el) {
      gsap.registerPlugin(Draggable);
      Draggable.create(el, {
        // bounds: document.body,
      });
    }
  }, []);

  return (
    <div ref={PCRef} className={styles.packetContainer}>
      {prop.children}
    </div>
  );
}
```

## 10.15 Troubleshooting

Can't get the `react-grid-dnd` swap function to work. I keep getting a TypeError that says the sourceId of the gridItem being swapped is undefined ("Uncaught TypeError: Cannot read properties of undefined (reading '4')").

As far as I know, I've translated the `onChange` (in my case `handleChange`) function appropriately according to multiple examples. I suspect it has something to do with my importing data via `.js` file instead of an array written directly into `App.js`.

Some examples I'm working off of:

- [https://www.npmjs.com/package/react-grid-dnd?activeTab=readme](https://www.npmjs.com/package/react-grid-dnd?activeTab=readme)
- [https://codesandbox.io/embed/gracious-wozniak-kj9w8](https://codesandbox.io/embed/gracious-wozniak-kj9w8)
- [https://codesandbox.io/s/github/gosiagorczyca/ReactGridDnD/tree/main/?file=/src/index.js](https://codesandbox.io/s/github/gosiagorczyca/ReactGridDnD/tree/main/?file=/src/index.js)

## Things I learned

- You [cannot](https://stackoverflow.com/questions/55137072/react-items-map-is-not-a-function) `.map` through an object, only an array. To iterate through an object, one must use `Object.keys(items).map(...)`.
- You cannot use an object as a key, otherwise React will stringify the object and use it as a “hash”.
- Not sure if this is recommended, but instead of using an `onLoad` function (like below) to set randomized IDs for each packet, I used `useEffect` with an empty array so that it [only ran once](https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once) upon first render.
  ```jsx
  const randomizeItems = () => {
      const randomizedItems = [...gridItems]
        .sort(() => Math.random - 0.5)
        .map((item) => ({ ...item, id: Math.random() * 1000 }));
      setGridItems(randomizedItems);
      console.log("items have been randomized");
    };

  ...

  <GridContextProvider onLoad={randomizeItems} onChange={handleChange}>
  ```
- My `useEffect` with an empty array (basically like an `onLoad` function) was firing twice upon rendering. To solve this, I needed to comment out `<React.StrictMode>` in the `src/index.js` because React StrictMode renders components twice on the dev server (source: https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar).
- The above change also resolved another issue—initially the packets divs were not moving along with the cursor upon drag. After commenting out StrictMode, the packet movements animated perfectly.
-

```jsx
useEffect(() => {
  shuffleGridItems(PACKET_LIST);
  console.log("items have been shuffled");
}, []);

const shuffleGridItems = (arr) => {
  const shuffledGridItems = [...arr];
  for (let i = shuffledGridItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledGridItems[i], shuffledGridItems[j]] = [
      shuffledGridItems[j],
      shuffledGridItems[i],
    ];
  }
  console.log(shuffledGridItems);
  return shuffledGridItems;
};
```

```jsx
useEffect(() => {
  const shuffledGridItems = [...PACKET_LIST]
    .sort(() => Math.random() - 0.5)
    .map((item) => ({ ...item, id: generateUID() }));
  setGridItems(shuffledGridItems);
  console.log("items have been shuffled");
  console.log(shuffledGridItems);
}, []);
```
