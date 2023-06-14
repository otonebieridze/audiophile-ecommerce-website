import styles from "./Cart.module.css";
import { useContext } from "react";
import { MyContext } from "../../App";

function Cart() {
  const context = useContext(MyContext);
  let total = 0;

  function decreaseQuantity(cartProduct: CartProduct) {
    if (cartProduct.quantity! > 1) {
      context?.setCartProducts((prev) =>
        prev.map((item) => {
          if (item.id === cartProduct.id) {
            return {
              ...item,
              quantity: item.quantity! - 1,
            };
          } else {
            return item;
          }
        })
      );
    } else {
      context?.setCartProducts((prev) =>
        prev.filter((item) => item.id !== cartProduct.id)
      );
    }
  }
  function increaseQuantity(cartProduct: CartProduct) {
    context?.setCartProducts((prev) =>
      prev.map((item) => {
        if (item.id === cartProduct.id) {
          return {
            ...item,
            quantity: item.quantity! + 1,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      {context?.cart && (
        <div className={styles.container}>
          <div className={styles["cart-header"]}>
            <h1>cart ({context.cartProducts.length})</h1>
            <p onClick={() => context.setCartProducts([])}>Remove all</p>
          </div>
          <div className={styles["cart-items"]}>
            {context.cartProducts.map((cartProduct) => {
              total = total + cartProduct.price! * cartProduct.quantity!;
              return (
                <div key={cartProduct.id} className={styles["cart-item"]}>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <img src={cartProduct.image} alt="cart-item-img" />
                    <div className={styles["name-price"]}>
                      <p>{cartProduct.name}</p>
                      <span>$ {cartProduct.price}</span>
                    </div>
                  </div>
                  <div className={styles["count-handler"]}>
                    <span onClick={() => decreaseQuantity(cartProduct)}>-</span>
                    <b>{cartProduct.quantity}</b>
                    <span onClick={() => increaseQuantity(cartProduct)}>+</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.total}>
            <p>TOTAL</p>
            <span>$ {total}</span>
          </div>
          <button className={styles["checkout-btn"]}>checkout</button>
        </div>
      )}
    </>
  );
}

export default Cart;
