import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles["nav-bar"]}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <ul>
          <Link className={styles.link} to="/">
            <li>home</li>
          </Link>
          <Link className={styles.link} to="/headphones">
            <li>headphones</li>
          </Link>
          <Link className={styles.link} to="/speakers">
            <li>speakers</li>
          </Link>
          <Link className={styles.link} to="/earphones">
            <li>earphones</li>
          </Link>
        </ul>

        <FontAwesomeIcon className={styles["cart-icon"]} icon={faCartShopping} />
      </div>  
    </div>
  );
}

export default Navbar;
