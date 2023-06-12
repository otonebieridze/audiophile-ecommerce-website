import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles["nav-bar"]}>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="logo" />
        </Link>

        <ul>
          <Link
            className={styles.link}
            to="/"
            onClick={() => window.scrollTo(0, 0)}
          >
            <li>home</li>
          </Link>
          <Link
            className={styles.link}
            to="/headphones"
            onClick={() => window.scrollTo(0, 0)}
          >
            <li>headphones</li>
          </Link>
          <Link
            className={styles.link}
            to="/speakers"
            onClick={() => window.scrollTo(0, 0)}
          >
            <li>speakers</li>
          </Link>
          <Link
            className={styles.link}
            to="/earphones"
            onClick={() => window.scrollTo(0, 0)}
          >
            <li>earphones</li>
          </Link>
        </ul>

        <FontAwesomeIcon
          className={styles["cart-icon"]}
          icon={faCartShopping}
        />
      </div>
    </div>
  );
}

export default Navbar;
