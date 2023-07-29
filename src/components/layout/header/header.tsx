import { component$ } from "@builder.io/qwik";
import { WeddingLogo } from "../../icons/wedding-logo";
import styles from "./header.module.scss";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={[ styles.wrapper]}>
        <ul class={styles.content}>
          <li class={styles.item}>
          <a href="#" >
              Bienvenido
            </a>
          </li>
          <li class={styles.item}>
            <a href="#history" >
              history
            </a>
          </li>
          <li class={styles.item}>
            <a href="#invitation" >
              invitation
            </a>
          </li>
          <li class={styles.item}>
            <a href="#schedule" >
              schedule
            </a>
          </li>
          <li class={styles.item}>
            <div class={styles.logo}>
              <a href="/" title="logo">
                <WeddingLogo height={136} width={125} />
              </a>
            </div>
          </li>
          <li class={styles.item}>
            <a href="#transportation" >
              transportation
            </a>
          </li>
          <li class={styles.item}>
            <a href="#mail" >
              mail
            </a>
          </li>
          <li class={styles.item}>
            <a href="#photos" >
              photos
            </a>
          </li>
          <li class={styles.item}>
            <a href="#timer" >
              timer
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
