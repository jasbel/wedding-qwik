import {  component$ } from "@builder.io/qwik";
import styles from "./timer.module.scss";
import Section from "~/components/layout/section/section";
import Counter from "./counter";

export default component$(() => {
  return (
    <>
  
      <Section id="timer" class={styles.section}>
        <div class={styles.box}>
        <div class={styles['box-content']}>
          <h3 class={styles.title}>Counting Days</h3>
          <p class={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iste eligendi officia architecto ab, commodi,
            reiciendis earum inventore quibusdam assumenda ratione ullam debitis laboriosam consequuntur laudantium iure
            incidunt. Alias, qui.
          </p>
          <Counter />
          <button class={styles.button}>Agregar a Calendario</button>
        </div>
        </div>
      </Section>
    </>
  );
});
