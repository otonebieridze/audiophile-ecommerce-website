import styles from "./Checkout.module.css";
import cashOnDelivery from "../../assets/cashOnDelivery.png";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import Ordered from "../../components/ordered/Ordered";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const [checked, setChecked] = useState("e-money");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (context?.cartProducts.length === 0 && !context.submit) {
      navigate(-1);
    }
  }, [context?.cartProducts.length]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit() {
    context?.setOrdered(true);
  }

  useEffect(() => {
    setTotal(0);
    context?.cartProducts.map(item => {
      setTotal(prev => prev + item.price! * item.quantity!);
    })
  }, [context?.cart]);

  return (
    <div className={styles.container}>
      <div className={styles["checkout-container"]}>
        <div className={styles.checkout}>
          <h1>CHECKOUT</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles["input-container"]}>
              <p className={styles["input-container-name"]}>Billing Details</p>
              <div className={styles["input-div-row"]}>
                <div className={styles["input-div"]}>
                  <p style={{ color: errors.name && "#CD2C2C" }}>Name</p>
                  <input
                    {...register("name", {
                      required: true,
                      minLength: 2,
                    })}
                    type="text"
                    placeholder="Alexei Ward"
                    style={{ border: errors.name && "1px solid #CD2C2C" }}
                  />

                  {errors.name && errors.name.type === "required" && (
                    <span role="alert" className={styles["error-message"]}>
                      This is required
                    </span>
                  )}
                  {errors.name && errors.name.type === "minLength" && (
                    <span role="alert" className={styles["error-message"]}>
                      Min length should be 2
                    </span>
                  )}
                </div>
                <div className={styles["input-div"]}>
                  <p style={{ color: errors.email && "#CD2C2C" }}>
                    Email Address
                  </p>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    type="text"
                    placeholder="alexei@mail.com"
                    style={{ border: errors.email && "1px solid #CD2C2C" }}
                  />

                  {errors.email && errors.email.type === "required" && (
                    <span role="alert" className={styles["error-message"]}>
                      This is required
                    </span>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <span role="alert" className={styles["error-message"]}>
                      Wrong format
                    </span>
                  )}
                </div>
              </div>
              <div className={styles["input-div-row"]}>
                <div className={styles["input-div"]}>
                  <p style={{ color: errors.phone && "#CD2C2C" }}>
                    Phone Number
                  </p>
                  <InputMask
                    mask="+1 (999) 999-9999"
                    maskChar={""}
                    {...register("phone", {
                      required: true,
                      pattern: /^\+1 \(\d{3}\) \d{3}-\d{4}$/,
                    })}
                    type="text"
                    placeholder="+1 202-555-0136"
                    style={{ border: errors.phone && "1px solid #CD2C2C" }}
                  />

                  {errors.phone && errors.phone.type === "required" && (
                    <span role="alert" className={styles["error-message"]}>
                      This is required
                    </span>
                  )}
                  {errors.phone && errors.phone.type === "pattern" && (
                    <span role="alert" className={styles["error-message"]}>
                      Please enter a valid phone number
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className={styles["input-container"]}>
              <p className={styles["input-container-name"]}>shipping info</p>
              <div className={styles["input-div-row"]}>
                <div
                  className={`${styles["input-div"]} ${styles["input-div-full"]}`}
                >
                  <p style={{ color: errors.address && "#CD2C2C" }}>Address</p>
                  <input
                    {...register("address", {
                      required: true,
                    })}
                    type="text"
                    placeholder="1137 Williams Avenue"
                    style={{ border: errors.address && "1px solid #CD2C2C" }}
                  />

                  {errors.address && errors.address.type === "required" && (
                    <span role="alert" className={styles["error-message"]}>
                      This is required
                    </span>
                  )}
                </div>
              </div>
              <div className={styles["input-div-row"]}>
                <div className={styles["input-div"]}>
                  <p style={{ color: errors.zip && "#CD2C2C" }}>ZIP Code</p>
                  <InputMask
                    mask="99999"
                    maskChar={""}
                    {...register("zip", {
                      required: true,
                      minLength: 5,
                    })}
                    type="text"
                    placeholder="10001"
                    style={{ border: errors.zip && "1px solid #CD2C2C" }}
                  />

                  {errors.zip && errors.zip.type === "required" && (
                    <span role="alert" className={styles["error-message"]}>
                      This is required
                    </span>
                  )}
                  {errors.zip && errors.zip.type === "minLength" && (
                    <span role="alert" className={styles["error-message"]}>
                      Please enter a valid ZIP code
                    </span>
                  )}
                </div>
                <div className={styles["input-div"]}>
                  <p style={{ color: errors.city && "#CD2C2C" }}>City</p>
                  <input
                    {...register("city", {
                      required: true,
                    })}
                    type="text"
                    placeholder="New York"
                    style={{ border: errors.city && "1px solid #CD2C2C" }}
                  />

                  {errors.city && errors.city.type === "required" && (
                    <span role="alert" className={styles["error-message"]}>
                      This is required
                    </span>
                  )}
                </div>
              </div>
              <div className={styles["input-div-row"]}>
                <div className={styles["input-div"]}>
                  <p style={{ color: errors.country && "#CD2C2C" }}>Country</p>
                  <input
                    {...register("country", {
                      required: true,
                    })}
                    type="text"
                    placeholder="United States"
                    style={{ border: errors.country && "1px solid #CD2C2C" }}
                  />

                  {errors.country && errors.country.type === "required" && (
                    <span role="alert" className={styles["error-message"]}>
                      This is required
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className={styles["input-container"]}>
              <p className={styles["input-container-name"]}>payment details</p>
              <div className={styles["input-div-row"]}>
                <div
                  className={`${styles["input-div"]} ${styles["method-div"]}`}
                >
                  <p>Payment Method</p>

                  <div className={styles["method"]}>
                    <div
                      onClick={() => {
                        document.getElementById("e-money")?.click();
                        setChecked("e-money");
                      }}
                      className={styles["radio-div"]}
                      style={{
                        border:
                          checked === "e-money" ? "1px solid #D87D4A" : "",
                      }}
                    >
                      <input
                        defaultChecked
                        type="radio"
                        name="payment"
                        value="e-Money"
                        id="e-money"
                      />
                      <label htmlFor="e-money">e-Money</label>
                    </div>
                    <div
                      onClick={() => {
                        document.getElementById("cash")?.click();
                        setChecked("cash");
                      }}
                      className={styles["radio-div"]}
                      style={{
                        border: checked === "cash" ? "1px solid #D87D4A" : "",
                      }}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="Cash on Delivery"
                        id="cash"
                      />
                      <label htmlFor="cash">Cash on Delivery</label>
                    </div>
                  </div>
                </div>
              </div>
              {checked === "e-money" ? (
                <div className={styles["input-div-row"]}>
                  <div className={styles["input-div"]}>
                    <p style={{ color: errors["eMoneyNumber"] && "#CD2C2C" }}>
                      e-Money Number
                    </p>
                    <InputMask
                      mask="999999999"
                      maskChar={""}
                      {...register("eMoneyNumber", {
                        required: true,
                        minLength: 9,
                      })}
                      type="text"
                      placeholder="238521993"
                      style={{
                        border: errors["eMoneyNumber"] && "1px solid #CD2C2C",
                      }}
                    />

                    {errors["eMoneyNumber"] &&
                      errors["eMoneyNumber"].type === "required" && (
                        <span role="alert" className={styles["error-message"]}>
                          This is required
                        </span>
                      )}
                    {errors["eMoneyNumber"] &&
                      errors["eMoneyNumber"].type === "minLength" && (
                        <span role="alert" className={styles["error-message"]}>
                          Must have a nine digits!
                        </span>
                      )}
                  </div>
                  <div className={styles["input-div"]}>
                    <p style={{ color: errors["eMoneyPin"] && "#CD2C2C" }}>
                      e-Money PIN
                    </p>
                    <InputMask
                      mask="9999"
                      maskChar={""}
                      {...register("eMoneyPin", {
                        required: true,
                        minLength: 4,
                      })}
                      type="text"
                      placeholder="6891"
                      style={{
                        border: errors["eMoneyPin"] && "1px solid #CD2C2C",
                      }}
                    />

                    {errors["eMoneyPin"] &&
                      errors["eMoneyPin"].type === "required" && (
                        <span role="alert" className={styles["error-message"]}>
                          This is required
                        </span>
                      )}
                    {errors["eMoneyPin"] &&
                      errors["eMoneyPin"].type === "minLength" && (
                        <span role="alert" className={styles["error-message"]}>
                          Must have a four digits!
                        </span>
                      )}
                  </div>
                </div>
              ) : (
                <div className={styles["cash-on-delivery"]}>
                  <img src={cashOnDelivery} alt="cash-on-delivery" />
                  <p>
                    The 'Cash on Delivery' option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </div>

            <button style={{ display: "none" }} type="submit" id="submit-btn">
              SUBMIT
            </button>
          </form>
        </div>

        <div className={styles.summary}>
          <h1>summary</h1>
          <div className={styles["cart-items"]}>
            {context?.cartProducts.map((cartProduct) => {
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
                  <b className={styles["items-quantity"]}>
                    {cartProduct.quantity}x
                  </b>
                </div>
              );
            })}
          </div>
          <div className={styles.details}>
            <div>
              <p>TOTAL</p>
              <b>{`$ ${total}`}</b>
            </div>
            <div>
              <p>SHIPPING</p>
              <b>$ 50</b>
            </div>
            <div className={styles["grand-total"]}>
              <p>GRAND TOTAL</p>
              <b>{`$ ${total + 50}`}</b>
            </div>
            <button
              onClick={() => document.getElementById("submit-btn")?.click()}
            >
              {checked === "e-money" ? "CONTINUE & PAY" : "CONTINUE"}
            </button>
          </div>
        </div>
      </div>

      {context?.ordered && <Ordered />}
    </div>
  );
}

export default Checkout;
