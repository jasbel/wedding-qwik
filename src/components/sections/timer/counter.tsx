import { $, component$, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./timer.module.scss";

const TargetDate = '2024-01-27T15:15:00';

export default component$(() => {
  const count = useSignal(0);
  const timeLeft = useSignal({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = $(() => {
    const targetDate = new Date(TargetDate) as unknown as number;
    const currentDate = new Date() as unknown as number;
    const difference = targetDate - currentDate;
    let _timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      _timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / (1000)),
      };
    }

    return _timeLeft;
  });

  const timeout = $(() => {
    if(count.value === 0) {;
      count.value++;

      setInterval(() => {
        calculateTimeLeft().then(timeValue => {
          timeLeft.value = timeValue;
        })
      }, 500);
    }
  });


  useVisibleTask$(() => {
    timeout();
  });


  return (
    <>
      <div class={styles.counter__wrap}>
        <div class={styles.counter}>
          <h3 class={styles.counter__value}>{timeLeft.value.days}</h3>
          <p class={styles.counter__label}>Dias</p>
        </div>
        <div class={styles.counter}>
          <h3 class={styles.counter__value}>{timeLeft.value.hours}</h3>
          <p class={styles.counter__label}>Horas</p>
        </div>
        <div class={styles.counter}>
          <h3 class={styles.counter__value}>{timeLeft.value.minutes}</h3>
          <p class={styles.counter__label}>Minutos</p>
        </div>
        <div class={styles.counter}>
          <h3 class={styles.counter__value}>{timeLeft.value.seconds}</h3>
          <p class={styles.counter__label}>Segundos</p>
        </div>
      </div>
    </>
  );
});
