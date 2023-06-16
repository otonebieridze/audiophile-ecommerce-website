import { Link } from "react-router-dom";
import styles from "./Ordered.module.css";
import orderIcon from "/assets/checkout/icon-order-confirmation.svg";

import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";

function Ordered() {
  const context = useContext(MyContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(0);
    context?.cartProducts.map(item => {
      setTotal(prev => prev + item.price! * item.quantity!);
    })
  }, [context?.cart]);

  return (
    <div className={styles.container}>
      <div className={styles.ordered}>
        <img
          className={styles["order-icon"]}
          src={orderIcon}
          alt="order-icon"
        />
        <h1>THANK YOU FOR YOUR ORDER</h1>
        <b>You will receive an email confirmation shortly.</b>
        <div className={styles["ordered-products"]}>
          <div className={styles["left-side"]}>
            <div className={styles.row}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                }}
              >
                <img
                  className={styles["product-image"]}
                  src={context?.cartProducts[0].image}
                  alt="product-image"
                />
                <div className={styles["name-price"]}>
                  <p>{context?.cartProducts[0].name}</p>
                  <span>{`$ ${context?.cartProducts[0].price}`}</span>
                </div>
              </div>
              <p className={styles.quantity}>{`x${context?.cartProducts[0].quantity}`}</p>
            </div>
            <div className={styles.line} />
            <p className={styles.others}>and {context?.cartProducts.length! - 1} other item(s)</p>
          </div>
          <div className={styles["right-side"]}>
            <div>
              <p className={styles.grand}>GRAND TOTAL</p>
              <p className={styles.total}>{`$ ${total + 50}`}</p>
            </div>
          </div>
        </div>
        <Link to="/" onClick={() => context?.setOrdered(false)}>
          <button className={styles["back-btn"]}>BACK TO HOME</button>
        </Link>
      </div>
    </div>
  );
}

export default Ordered;
