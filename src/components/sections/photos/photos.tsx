import { Slot, component$ } from "@builder.io/qwik";
import Section from "~/components/layout/section/section";
import styles from "./photos.module.scss";
import ItemPhoto from "./item-photo";

const url = './images/photo2.png';
const data = [{url},{url},{url},{url},{url},{url},];

export default component$(() => {
  return (
    <>
      <figure>
        <img src="./section/photos.png" />
      </figure>
      <Section id="photos" class={styles.section}>
        <div class={styles.header}>
          <div />
          <h2 class={styles.title}>Fotos</h2>
          <div class={styles["button-container"]}>
            <button>{"<"}</button>
            <button>{">"}</button>
          </div>
        </div>

        <div class={styles["item-container"]}>
          {data.map((d) => (
            <>
              <ItemPhoto url={d.url} />
            </>
          ))}
        </div>
        <div class={styles.progress__wrap}>
          <div class={styles.progress}>
            <div class={styles.progress__item}></div>
          </div>
        </div>
      </Section>
    </>
  );
});
