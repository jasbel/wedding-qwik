import { component$ } from "@builder.io/qwik";
import styles from "./schedule.module.scss";
import { type ISchedule } from "./schedule";
import ScheduleMenuItem from "./schedule-menu-item";

export default component$(({ items }: { items: ISchedule[] }) => {
  return (
    <>
      <div>
        <h3 class={styles.title}>Horario</h3>
        <ul class={styles.itemContainer}>
          {items.map((item) => (
            <ScheduleMenuItem key={item.title} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
});
