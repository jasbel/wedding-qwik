/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import styles from "./schedule.module.scss";
import { type ISchedule } from "./schedule";

export default component$(({ item }: { item: ISchedule }) => {
  return (
    <>
      <div class={[styles.info]}>
        <div class={styles["info__content"]}>
          <h3 class={styles.info__title}>{item.title}</h3>

          <span class={styles.info__timeContent}>
            {item.description.map((d, i) => (
              <p key={i} class={styles.info__description}>{d}</p>
            ))}
          </span>

          <p>
            <strong>Hora: </strong> {item.time}
          </p>

          <div>
            <button class={styles.info__btn}>Ver en Mapa</button>
          </div>
        </div>
        <div class={styles["info__photo-wrap"]}>
          <div class={styles["info__photo-content"]}>
            <figure class={styles.info__photo}>
              <img src="/images/photo5.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
});
