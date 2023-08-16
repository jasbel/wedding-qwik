import { component$ } from "@builder.io/qwik";
import styles from "./timer.module.scss";

export default component$(() => {
  return (
    <>
      <div class={styles.counter__wrap}>
        <div class={styles.counter}>
          <h3 class={styles.counter__value}>147</h3>
          <p class={styles.counter__label}>Dias</p>
        </div>
        <div class={styles.counter}>
          <h3 class={styles.counter__value}>22</h3>
          <p class={styles.counter__label}>Horas</p>
        </div>
        <div class={styles.counter}>
          <h3 class={styles.counter__value}>50</h3>
          <p class={styles.counter__label}>Minutos</p>
        </div>
        <div class={styles.counter}>
          <h3 class={styles.counter__value}>50</h3>
          <p class={styles.counter__label}>Segundos</p>
        </div>
      </div>
    </>
  );
});
