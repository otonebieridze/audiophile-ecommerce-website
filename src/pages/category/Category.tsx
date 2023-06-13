import styles from "./Category.module.css";
import { useEffect } from "react";
import data from "../../data/data.json";
import { Link, useParams } from "react-router-dom";

import Products from "../../components/products/Products";
import Advert from "../../components/advert/Advert";
import Footer from "../../components/footer/Footer";

function Category() {
  const { category } = useParams();
  const products = data.filter(item => item.category === category);

  useEffect(() => {
    // scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className={styles.container}>
      <header>
        <h1>{category}</h1>
      </header>

      {products.map(product => (
        <div key={product.id} className={styles.product}>
          <img src={product.image.desktop} alt="product-img" />
          <div>
            {product.new && <h3>NEW PRODUCT</h3>}
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <Link to={product.slug} style={{ width: "160px" }}>
              <button>See Product</button>
            </Link>
          </div>
        </div>
      ))}

      <div style={{ width: "100%" }}>
        <Products />
        <Advert />
        <Footer />
      </div>
    </div>
  );
}

export default Category;
