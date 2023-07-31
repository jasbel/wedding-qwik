import { Slot, component$ } from "@builder.io/qwik";
import styles from "./transportation.module.css";
import Section from "~/components/layout/section/section";

export default component$(() => {
  return (
    <>
      <figure>
        <img src="./section/transportation.png" />
      </figure>
      <Section id="transportation" class={styles.section}>
        <h3>
          <Slot name="title" />
        </h3>
        <Slot />
      </Section>
    </>
  );
});
