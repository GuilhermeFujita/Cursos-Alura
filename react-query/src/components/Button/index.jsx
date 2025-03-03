import styles from "./button.module.css";

export const Button = ({ children, disable }) => {
  return (
    <button className={styles.btn} disabled={disable}>
      {children}
    </button>
  );
};
