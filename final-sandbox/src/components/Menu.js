import { NavLink, Outlet, useLocation } from "react-router-dom";
import cx from "classnames";
import styles from "./components.module.css";

export default function Menu() {
  const menuLinkCX = cx(styles.menuLink);
  const activeLinkCX = cx(styles.activeLink);
  const menuContainerCX = cx(styles.menuContainer);

  let location = useLocation();

  return (
    <div className={menuContainerCX}>
      <NavLink
        className={({ isActive }) => (isActive ? activeLinkCX : menuLinkCX)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeLinkCX : menuLinkCX)}
        to="/upload"
        state={{ previousLocation: location }}
      >
        Upload
      </NavLink>
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
    </div>
  );
}
