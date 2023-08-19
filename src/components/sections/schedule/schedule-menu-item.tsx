import { component$ } from "@builder.io/qwik";
import styles from "./schedule.module.scss";
import { type ISchedule } from "./schedule";

export default component$(({ item }: { item: ISchedule }) => {
  return (
    <>
      <li class={[styles.menu__item, item.active && styles["menu__item--active"]]}>
        <span class={styles.menu__title}>{item.title}</span>
        <span class={styles.menu__timeContent}>
          <span>{item.time}</span>

          <i class={["fa-solid fa-chevron-right", styles.menu__icon]}></i>
        </span>
      </li>
    </>
  );
});
