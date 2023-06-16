import styles from "./Details.module.css";
import data from "../../data/data.json";
import { Link, useParams } from "react-router-dom";

import Products from "../../components/products/Products";
import Advert from "../../components/advert/Advert";

import { useContext, useState } from "react";
import { MyContext } from "../../App";

function Details() {
  const context = useContext(MyContext);
  const params = useParams();
  const product = data.find(
    (item) => item.slug === params.product && item.category === params.category
  );

  const [productQuantity, setProductQuantity] = useState(1);

  function decreaseQuantity() {
    if (productQuantity > 1) {
      setProductQuantity(prev => prev - 1);
    }
  }
  function increaseQuantity() {
    setProductQuantity(prev => prev + 1);
  }

  function addToCart() {
    if (!context?.cartProducts.find(item => item.id === product?.id)) {
      context?.setCartProducts((prev: CartProduct[]) => [...prev, {
        id: product?.id,
        image: `.${product?.image.desktop}`,
        name: product?.name,
        price: product?.price,
        quantity: productQuantity
      }])
    } else {
      let cartProduct = context.cartProducts.find(item => item.id === product?.id);
      context.setCartProducts(prev => prev.map(item => {
        if (item.id === cartProduct?.id) {
          return {
            ...item,
            quantity: productQuantity
          }
        } else {
          return item
        }
      }))
    }

    setProductQuantity(1);
  }

  return (
    <>
      <div className={styles.container}>
        <button className={styles["go-back"]}>Go Back</button>

        <div className={styles.product}>
          <img src={`.${product?.image.desktop}`} alt="product-img" />
          <div className={styles["product-info"]}>
            {product?.new && <h3>NEW PRODUCT</h3>}
            <h1>{product?.name}</h1>
            <p className={styles.description}>{product?.description}</p>
            <p className={styles.price}>{`$ ${product?.price}`}</p>

            <div className={styles["product-footer"]}>
              <div className={styles["quantity-handler"]}>
                <button onClick={decreaseQuantity}>-</button>
                <p>{productQuantity}</p>
                <button onClick={increaseQuantity}>+</button>
              </div>
              <button
                className={styles["add-btn"]}
                onClick={addToCart}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles["left-side"]}>
            <h1>FEATURES</h1>
            <p>{product?.features}</p>
          </div>
          <div className={styles["right-side"]}>
            <h1>in the box</h1>
            <ul>
              {product?.includes.map((item, index) => (
                <li key={index}>
                  <b style={{ color: "#D87D4A" }}>{`${item.quantity}x`}</b>
                  <span style={{ marginLeft: "15px" }}>{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.gallery}>
          <div className={styles["left-side"]}>
            <img src={`.${product?.gallery.first.desktop}`} alt="product-img" />
            <img
              src={`.${product?.gallery.second.desktop}`}
              alt="product-img"
            />
          </div>
          <div className={styles["right-side"]}>
            <img src={`.${product?.gallery.third.desktop}`} alt="product-img" />
          </div>
        </div>

        <div className={styles.others}>
          <h1>you may also like</h1>
          <div className={styles["other-products"]}>
            {product?.others.map((item, index) => {
              const category = data.find(
                (item2) => item2.slug === item.slug
              )?.category;
              return (
                <div key={index}>
                  <img src={`.${item.image.desktop}`} alt="product-img" />
                  <p>{item.name}</p>
                  <Link to={`/${category}/${item.slug}`}>
                    <button>See Product</button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Products />
      <Advert />
    </>
  );
}

export default Details;
