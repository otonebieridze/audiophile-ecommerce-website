import styles from "./Hero.module.css";
import imageHero from "../../assets/image-hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles["hero"]}>
        <div className={styles["left-side"]}>
          <p>NEW PRODUCT</p>
          <h1>XX99 Mark II HeadphoneS</h1>
          <h4>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </h4>
          <Link
            style={{ width: "160px" }}
            to="/headphones/xx99-mark-two-headphones"
          >
            <button>See Product</button>
          </Link>
        </div>
        <img src={imageHero} alt="image-hero" />
      </div>
    </div>
  );
}

export default Hero;
