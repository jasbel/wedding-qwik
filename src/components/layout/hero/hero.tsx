import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.scss";
import ItemHero from "./item-hero";
// import ImgThunder from "~/media/thunder.png?jsx";

export default component$(() => {
  return (
    <>
      <div class={["container", styles.hero]}>
        <div class={styles.box}>
          <p class={styles.box__description}>Celebrando nuestro dia mas especial</p>
          <h2 class={styles.box__title}>Asbel & Loida</h2>

          <p class={styles.box__description}>Enero 05, 2024 - Bolivia, Cbba.</p>

          <button class={styles.box__btn} onClick$={() => console.log("Guardar a calendario")}>
            Guardar a calendario
          </button>
          {/* <a href="https://qwik.builder.io/docs" target="_blank" class="button button-dark">
          Explore the docs
        </a> */}
        </div>
        <div class={styles["item__container"]}>
          <div class={[styles.item, styles["item--left"]]}>
            <ItemHero urlBg="./images/photo1.png" small />
          </div>

          <div class={[styles.item, styles["item--center"]]}>
            <ItemHero urlBg="./images/photo2.png" />
          </div>

          <div class={[styles.item, styles["item--right"]]}>
            <ItemHero urlBg="./images/photo3.png" small />
          </div>
        </div>
      </div>
    </>
  );
});
