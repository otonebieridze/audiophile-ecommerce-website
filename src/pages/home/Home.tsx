import styles from "./Home.module.css";

import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import Advert from "../../components/advert/Advert";
import Footer from "../../components/footer/Footer";

import imageSpeaker from "../../assets/speaker-preview.png";
import circles from "../../assets/pattern-circles.svg";
import imageEarphones from "../../assets/earphones-preview.jpg";

function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <div className={styles.main}>
        <Products />
        <section>
          <div className={styles["product-1"]}>
            <img className="speaker-img" src={imageSpeaker} alt="product-1" />
            <div className={styles["product-1-description"]}>
              <h1>ZX9 SPEAKER</h1>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button>See Product</button>
            </div>
            <img className={styles.circles} src={circles} alt="circles" />
          </div>

          <div className={styles["product-2"]}>
            <div>
              <h1>ZX7 SPEAKER</h1>
              <button>See Product</button>
            </div>
          </div>

          <div className={styles["product-3"]}>
            <img src={imageEarphones} alt="product-3" />
            <div>
              <h1>YX1 EARPHONES</h1>
              <button>See Product</button>
            </div>
          </div>
        </section>

        <Advert />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
