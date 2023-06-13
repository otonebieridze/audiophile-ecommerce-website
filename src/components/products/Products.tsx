import styles from "./Products.module.css";

import headphonesImg from "../../assets/headphone-page-preview.png";
import speakerImg from "../../assets/speaker-category-page-preview.png";
import earphonesImg from "../../assets/earphone-category-page-preview.png";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Products() {
  const productsArr = [
    {
      img: headphonesImg,
      name: "HEADPHONES",
      link: "/headphones",
    },
    {
      img: speakerImg,
      name: "SPEAKERS",
      link: "/speakers",
    },
    {
      img: earphonesImg,
      name: "EARPHONES",
      link: "/earphones",
    },
  ];

  return (
    <div className={styles.container}>
      {productsArr.map((product, index) => (
        <Link
          key={index}
          style={{ textDecoration: "none" }}
          to={product.link}
        >
          <div className={styles.product}>
            <img src={product.img} alt="product-img" />
            <h1>{product.name}</h1>
            <div className={styles.shopping}>
              <p>SHOP</p>
              <FontAwesomeIcon
                className={styles["arrow-icon"]}
                icon={faAngleRight}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Products;
