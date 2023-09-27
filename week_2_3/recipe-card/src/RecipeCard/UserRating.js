import { useState } from "react";
import styles from "./RecipeCard.module.css";
import { ReactComponent as Heart } from "@material-design-icons/svg/filled/favorite.svg";
import { ReactComponent as Add } from "@material-design-icons/svg/filled/add.svg";
import { ReactComponent as Remove } from "@material-design-icons/svg/filled/remove.svg";

export default function UserRating() {
  // array destructuring
  // a nice way to access a piece of state (count) and its setting (setCount)
  // useState(0) means initial count is 0
  // useState and other use__ are called HOOKS

  const [count, setCount] = useState(0); // any data type can go in useState()
  const [showAdd, setShowAdd] = useState(true);
  const [showRemove, setShowRemove] = useState(true);

  const handlePlusClick = () => {
    if (count < 5) {
      setShowAdd(true);
      setShowRemove(true);
      setCount((prevCount) => {
        return prevCount + 1;
      });
      console.log(count);
    } else if (count == 5) {
      setShowAdd(false);
      console.log(count);
    }
    return;
  };

  const handleMinusClick = () => {
    if (count > 0) {
      setShowAdd(true);
      setShowRemove(true);
      setCount((prevCount) => {
        return prevCount - 1;
      });
      console.log(count);
    } else if (count == 0) {
      setShowRemove(false);
      console.log(count);
    }
    return;
  };

  return (
    <div className={styles.ratingsContainer}>
      {[...Array(count)].map((heart, i) => {
        return (
          <span className={styles.heart} key={i}>
            <Heart />
          </span>
        );
      })}
      {showRemove ? (
        <button className={styles.removeButton} onClick={handleMinusClick}>
          <Remove />
        </button>
      ) : null}
      {showAdd ? (
        <button className={styles.addButton} onClick={handlePlusClick}>
          <Add />
        </button>
      ) : null}
    </div>
  );
}

/* The reason the first count logged to the console is 0 is because the useState hook is asynchronous in nature. When you call setCount(count + 1) or setCount(count - 1), it schedules an update to the count state, but it doesn't update the state immediately. Therefore, when you log count immediately after calling setCount, you are still logging the previous value of count. */
