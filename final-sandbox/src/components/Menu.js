import { NavLink } from "react-router-dom";
import cx from "classnames";
import styles from "./components.module.css";

export default function Menu({ handleLogout, openUpload }) {
  const menuLinkCX = cx(styles.menuLink);
  const activeLinkCX = cx(styles.activeLink, styles.menuLink);
  const menuContainerCX = cx(styles.menuContainer);

  return (
    <div className={menuContainerCX}>
      <NavLink
        className={({ isActive }) => (isActive ? activeLinkCX : menuLinkCX)}
        to="/gallery"
      >
        Cabinet
      </NavLink>
      <button className={menuLinkCX} onClick={openUpload}>
        Upload
      </button>
      <NavLink
        className={({ isActive }) => (isActive ? activeLinkCX : menuLinkCX)}
        to="/profile"
      >
        Profile
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeLinkCX : menuLinkCX)}
        to="/about"
      >
        About
      </NavLink>
      <button className={menuLinkCX} onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}
