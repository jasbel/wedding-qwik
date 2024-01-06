import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer class={styles.footer}>
      <div>
        <a href="https://www.builder.io/" target="_blank" class={styles.anchor}>
          <span>Made with ♡ by asbel.dev</span>
          <span class={styles.spacer}>|</span>
        </a>
      </div>
    </footer>
  );
});
