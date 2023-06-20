import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import Cart from "../cart/Cart";
import { MyContext } from "../../App";
import { useContext, useState } from "react";

function Navbar() {
  const context = useContext(MyContext);
  const [menu, setMenu] = useState(false);

  return (
    <div
      className={styles.container}
      style={{ pointerEvents: context?.ordered ? "none" : "all" }}
    >
      <div className={styles["nav-bar"]}>
        <FontAwesomeIcon
          className={styles["menu-icon"]}
          icon={menu ? faXmark : faBars}
          onClick={() => setMenu((prev) => !prev)}
        />

        <Link to="/">
          <img src={logo} alt="logo" onClick={() => setMenu(false)} />
        </Link>

        <ul style={{ left: menu ? "0" : "" }}>
          <Link className={styles.link} to="/" onClick={() => setMenu(false)}>
            <li>home</li>
          </Link>
          <Link
            className={styles.link}
            to="/headphones"
            onClick={() => setMenu(false)}
          >
            <li>headphones</li>
          </Link>
          <Link
            className={styles.link}
            to="/speakers"
            onClick={() => setMenu(false)}
          >
            <li>speakers</li>
          </Link>
          <Link
            className={styles.link}
            to="/earphones"
            onClick={() => setMenu(false)}
          >
            <li>earphones</li>
          </Link>
        </ul>

        <div
          className={styles["cart-icon-div"]}
          onClick={() => context?.setCart((prev) => !prev)}
        >
          <FontAwesomeIcon
            className={styles["cart-icon"]}
            icon={faCartShopping}
          />
          {context?.cartProducts.length! > 0 && (
            <div className={styles.circle}>{context?.cartProducts.length}</div>
          )}
        </div>

        <Cart />
      </div>
    </div>
  );
}

export default Navbar;
