import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Cart from "../cart/Cart";
import { MyContext } from "../../App";
import { useContext } from "react";

function Navbar() {
  const context = useContext(MyContext);

  return (
    <div className={styles.container}>
      <div className={styles["nav-bar"]}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <ul>
          <Link
            className={styles.link}
            to="/"
          >
            <li>home</li>
          </Link>
          <Link
            className={styles.link}
            to="/headphones"
          >
            <li>headphones</li>
          </Link>
          <Link
            className={styles.link}
            to="/speakers"
          >
            <li>speakers</li>
          </Link>
          <Link
            className={styles.link}
            to="/earphones"
          >
            <li>earphones</li>
          </Link>
        </ul>

        <FontAwesomeIcon
          className={styles["cart-icon"]}
          icon={faCartShopping}
          onClick={() => context?.setCart(true)}
        />

        <Cart />
      </div>
    </div>
  );
}

export default Navbar;
