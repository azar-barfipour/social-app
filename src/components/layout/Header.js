import { NavLink, useLocation } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <div className={classes["header"]}>
      <h2 className={classes["header__title"]}>Social</h2>
      <ul className={classes["nav"]}>
        <li className={classes["nav__list"]}>
          <NavLink
            to="/"
            className={`${classes["nav__link"]} ${
              location === "/home" ? classes["nav__active"] : ""
            }`}
          >
            Home
          </NavLink>
        </li>
        <li className={classes["nav__list"]}>
          <NavLink
            to="/login"
            className={`${classes["nav__link"]} ${
              location === "/login" ? classes["nav__active"] : ""
            }`}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
