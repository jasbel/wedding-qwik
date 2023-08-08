import { component$ } from "@builder.io/qwik";
import styles from "./mail.module.scss";

interface IInputMail {
  label: string;
  value: string;
  type?: "text" | "email" | "checkbox" | "submit";
}

export default component$(({ label, value, type = "text" }: IInputMail) => {
  if (type === "checkbox")
    return (
      <div class={styles.input__wrap}>
        <label class={styles.input__label}>{label}</label>
        <input class={styles.input__value} type={type} value={value} />
      </div>
    );

  if (type === "submit")
    return (
      <div class={styles.input__wrap}>
        <button class={styles.input__button} type="submit">{label}</button>
      </div>
    );

  return (
    <div class={styles.input__wrap}>
      <label class={styles.input__label}>{label}</label>
      <input class={styles.input__value} type={type} value={value} />
    </div>
  );
});
