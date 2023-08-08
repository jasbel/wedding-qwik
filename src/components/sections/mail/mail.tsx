import { component$ } from "@builder.io/qwik";
import Section from "~/components/layout/section/section";

import styles from "./mail.module.scss";
import InputMail from "./input-mail";

export default component$(() => {
  return (
    <>
      <Section id="mail" class={styles.section}>
        <div class={styles.box}>
          <h2 class={styles.title}>ASBEL & LOIDA</h2>

          <figure class={styles.image}>
            <img src="/images/flower-main.png" alt="flower-main" />
          </figure>

          <p class={styles.description}>We Look forward for your Attendance</p>

          <form action="" class={styles.form}>
            <InputMail label="Guest" value="" />
            <InputMail label="Partner" value="" />
            <InputMail label="Email" value="" type="email" />
            <InputMail label="Attending" value="" type="checkbox" />
            <InputMail label="submit" value="" type="submit" />
          </form>
        </div>
      </Section>
      <figure>
        <img src="./section/mail.png" />
      </figure>
    </>
  );
});
