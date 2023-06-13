import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles["left-side"]}>
          <img src={logo} alt="logo" />
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>
          <h4>Copyright 2021. All Rights Reserved</h4>
        </div>

        <div className={styles["right-side"]}>
          <ul>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
            >
              <li>home</li>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="/headphones"
            >
              <li>headphones</li>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="/speakers"
            >
              <li>speakers</li>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="/earphones"
            >
              <li>earphones</li>
            </Link>
          </ul>

          <div>
            <FontAwesomeIcon className={styles.icon} icon={faFacebookSquare} />
            <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
            <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
