import styles from "./BlackScreen.module.css";
import { MyContext } from "../../App";
import { useContext } from "react";

function BlackScreen() {
  const context = useContext(MyContext);
  return (
    <div className={styles.container} onClick={() => context?.setCart(false)} />
  );
}

export default BlackScreen;
