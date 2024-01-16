import { $, component$ } from "@builder.io/qwik";
import styles from "./hero.module.scss";
import ItemHero from "./item-hero";
// import ImgThunder from "~/media/thunder.png?jsx";

const url = 'https://www.google.com/calendar/event?action=TEMPLATE&text=Boda%20Asbel%20y%20Loida&dates=20240127T190000Z/20240128T000000Z&details=Descripci%C3%B3n&location=https://maps.app.goo.gl/YDCur2fUJ2B9qLn9A';


export default component$(() => {

  return (
    <>
      <div class={["container", styles.hero]}>
        <div class={styles.box}>
          <p class={styles.box__description}>Celebrando nuestro dia mas especial</p>
          <h2 class={styles.box__title}>Asbel & Loida</h2>

          <p class={styles.box__description}>Enero 27, 2024 - Bolivia, Cbba.</p>

          <a class={styles.box__btn}  href={url} target="_blank" rel="noopener noreferrer">Guardar a calendario</a>
          {/* <a href="https://qwik.builder.io/docs" target="_blank" class="button button-dark">
          Explore the docs
        </a> */}
        </div>
        <div class={styles["item__container"]}>
          <div class={[styles.item, styles["item--left"]]}>
            <ItemHero urlBg="./images/photo1.png" small />
          </div>

          {/* <div class={[styles.item, styles["item--center"]]}>
            <ItemHero urlBg="./images/photo2.png" />
          </div> */}

          <div class={[styles.item, styles["item--right"]]}>
            <ItemHero urlBg="./images/photo3.png" small />
          </div>
        </div>
      </div>
    </>
  );
});
