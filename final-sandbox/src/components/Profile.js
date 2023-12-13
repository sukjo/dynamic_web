import styles from "./components.module.css";
import cx from "classnames";
import "./components.module.css";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const profilePageContainer = cx(styles.profilePageContainer);

  return (
    <div className={profilePageContainer}>
      <p>Welcome {user && user.email}</p>
      <p>Your uploads:</p>
    </div>
  );
}
