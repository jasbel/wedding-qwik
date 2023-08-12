import { component$ } from "@builder.io/qwik";
import styles from "./history.module.scss";

interface IItemHistoryProps {
  title?: string;
  urlBg?: string;
  description?: string;
}

export default component$(({ title = "", description = "", urlBg }: IItemHistoryProps) => {
  return (
    <div class={styles.item__content} style={`background-image: url(${urlBg})`}>
      <div class={styles.item}>
        <h2 class={styles.item__title}>{title}</h2>
        <div class={styles.item__descriptionWrap} >
          <p class={styles.item__description}>{description}</p>
        </div>
      </div>
    </div>
  );
});
