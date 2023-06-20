import styles from "./Category.module.css";
import data from "../../data/data.json";
import { Link, useParams } from "react-router-dom";

import Products from "../../components/products/Products";
import Advert from "../../components/advert/Advert";

function Category() {
  const { category } = useParams();
  const products = data.filter(item => item.category === category);

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
            <Link to={product.slug} style={{ width: "160px", height: "48px" }}>
              <button>See Product</button>
            </Link>
          </div>
        </div>
      ))}

      <div style={{ width: "100%" }}>
        <Products />
        <Advert />
      </div>
    </div>
  );
}

export default Category;
