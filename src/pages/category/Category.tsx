import styles from "./Category.module.css";
import data from "../../data/data.json";
import { useParams } from "react-router-dom";

import Products from "../../components/products/Products";
import Advert from "../../components/advert/Advert";
import Footer from "../../components/footer/Footer";

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
            <button>See Product</button>
          </div>
        </div>
      ))}

      <Products />
      <Advert />
      <Footer />
    </div>
  );
}

export default Category;
