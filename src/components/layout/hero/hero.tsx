import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.scss";
import ItemHero from "./item-hero";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <div class={styles.box}>
        <p class={styles.box__description}>Celebrando nuestro dia mas especial</p>
        <h2 class={styles.box__title}>Asbel & Loida</h2>
        
        <p class={styles.box__description}>Julio 20, 2023 - Bolivia, Cbba.</p>

        <button class={styles.box__btn} onClick$={() => console.log("Guardar a calendario")}>
          Guardar a calendario
        </button>
        {/* <a href="https://qwik.builder.io/docs" target="_blank" class="button button-dark">
          Explore the docs
        </a> */}
        <div class={styles['hero__item-container']}>
          <div class={[styles.hero__item, styles["hero__item--left"]]}>
            <ItemHero urlBg="./images/photo1.png" small />
          </div>

          <div class={[styles.hero__item, styles["hero__item--center"]]}>
            <ItemHero urlBg="./images/photo2.png" />
          </div>

          <div class={[styles.hero__item, styles["hero__item--right"]]}>
            <ItemHero urlBg="./images/photo3.png" small />
          </div>
        </div>
      </div>
    </div>
  );
});
