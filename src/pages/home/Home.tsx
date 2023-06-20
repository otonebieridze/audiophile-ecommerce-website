import styles from "./Home.module.css";

import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import Advert from "../../components/advert/Advert";

import imageSpeaker from "../../assets/speaker-preview.png";
import circles from "../../assets/pattern-circles.svg";
import imageEarphones from "../../assets/earphones-preview.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <div className={styles.main}>
        <Products />
        <section>
          <div className={styles["product-1"]}>
            <img className={styles["speaker-img"]} src={imageSpeaker} alt="product-1" />
            <div className={styles["product-1-description"]}>
              <h1>ZX9 SPEAKER</h1>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link to="/speakers/zx9-speaker">
                <button>See Product</button>
              </Link>
            </div>
            <img className={styles.circles} src={circles} alt="circles" />
          </div>

          <div className={styles["product-2"]}>
            <div>
              <h1>ZX7 SPEAKER</h1>
              <Link to="/speakers/zx7-speaker" style={{ width: "160px" }}>
                <button>See Product</button>
              </Link>
            </div>
          </div>

          <div className={styles["product-3"]}>
            <img src={imageEarphones} alt="product-3" />
            <div>
              <h1>YX1 EARPHONES</h1>
              <Link to="/earphones/yx1-earphones" style={{ width: "160px" }}>
                <button>See Product</button>
              </Link>
            </div>
          </div>
        </section>

        <Advert />
      </div>
    </div>
  );
}

export default Home;
