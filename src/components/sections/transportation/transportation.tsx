import { Slot, component$ } from "@builder.io/qwik";
import styles from "./transportation.module.css";

export default component$(() => {
  return (
    <>
      <figure>
        <img src="./section/transportation.png" />
      </figure>
      <div class={styles.section}>
        <h3>
          <Slot name="title" />
        </h3>
        <Slot />
      </div>
    </>
  );
});
