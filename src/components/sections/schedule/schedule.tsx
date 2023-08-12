import { component$ } from "@builder.io/qwik";
import styles from "./schedule.module.css";
import Section from "~/components/layout/section/section";

export default component$(() => {
  return (
    <>
      <figure>
        <img src="./section/schedule.png" />
      </figure>
      <Section id="schedule" class={styles.section}></Section>
    </>
  );
});
