import styles from "./InputWrapper.module.css";

const InputWrapper = ({ children, label, help, width = "400px" }) => {
  return (
    <div className={styles.wrapper} style={{ width }}>
      <label className={styles.label}>{label}</label>
      {children}
      <small className={styles.help}>{help}</small>
    </div>
  );
};

export default InputWrapper;
