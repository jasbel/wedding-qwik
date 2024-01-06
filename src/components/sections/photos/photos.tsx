import { component$ } from "@builder.io/qwik";
import Section from "../../layout/section/section";
import styles from "./photos.module.scss";
import ItemPhoto from "./item-photo";

const url = "./images/photo2.png";
const data = [{ url }, { url }, { url }, { url }, { url }, { url }];

export default component$(() => {
  return (
    <Section id="photos" class={styles.section} noWrap>
      <div class={styles.header}>
        <div />
        <h2 class={styles.title}>Fotos</h2>
        <div class={styles["button-container"]}>
          <button>
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button>
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div class={styles["item-wrapper"]}>
        <div class={styles["item-container"]}>
          {data.map((d, i) => (
            <ItemPhoto key={i} url={d.url} />
          ))}
        </div>
      </div>

      <div class={styles.progress__wrap}>
        <div class={styles.progress}>
          <div class={styles.progress__item}></div>
        </div>
      </div>
    </Section>
  );
});
