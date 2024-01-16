import {  $, component$ } from "@builder.io/qwik";
import styles from "./timer.module.scss";
import Section from "../../layout/section/section";
import Counter from "./counter";

export default component$(() => {
  const url = 'https://www.google.com/calendar/event?action=TEMPLATE&text=Boda%20Asbel%20y%20Loida&dates=20240127T190000Z/20240128T000000Z&details=Descripci%C3%B3n&location=https://maps.app.goo.gl/YDCur2fUJ2B9qLn9A';
  
  const openCalendar = $(() => {
    window.open(url, '_blank');
  });
  
  return (
      <Section id="timer" class={styles.section}>
        <div class={styles.box}>
        <div class={styles['box-content']}>
          <h3 class={styles.title}>Cuanto falta para la boda</h3>
          
          <Counter client:load />
          {/* <button class={styles.button} onClick$={openCalendar}>Agregar a Calendario</button> */}
          <a class={styles.button} target="_blank" href={url} >Agregar a Calendario</a>
        </div>
        </div>
      </Section>
  );
});
