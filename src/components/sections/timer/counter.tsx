import { component$, useSignal } from "@builder.io/qwik";
import styles from "./timer.module.scss";

export default component$(() => {
  const eventDate = new Date("2024-01-06T00:00:00") as any;
  const count = useSignal(0);

  // const updateTimer = () => {
  //   const currentDate = new Date() as any;
  //   const timeDifference = eventDate - currentDate;

  //   if (timeDifference <= 0) {
  //     document.getElementById("timer").textContent = "¡El evento ha comenzado!";
  //   } else {
  //     const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  //     document.getElementById("timer").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  //   }
  // };

  // // Actualiza el temporizador cada segundo
  // setInterval(updateTimer, 1000);

  // // Actualiza el temporizador al cargar la página
  // window.onload = updateTimer;

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
