import { component$ } from "@builder.io/qwik";
import Section from "../../layout/section/section";
import ItemHistory from "./item-history";
import styles from "./history.module.scss";
import { Points } from "../../icons/points";

export default component$(() => {
  return (
    <Section id="history" class={styles.section}>
      <div class={styles["floating"]}>
        <Points />
      </div>

      <div class={styles.container}>
        <h3 class={styles.title}>Nuestra historia...</h3>
        <div class={styles.item__container}>
          <ItemHistory
            title="1"
            description="Duis facilisi pretium gravida volutpat commodo eu tellus sed. Hac ridiculus cras morbi nec. Volutpat urna ac aliquet tincidunt commodo mus elementum congue. Tempus aliquet ut venenatis sollicitudin tellus diam, vulputate aenean. Aenean lectus tempus elementum sit at pellentesque. 
"
          />
          <ItemHistory urlBg="./images/photo4.png" />
          <ItemHistory
            title="2"
            description=" Duis facilisi pretium gravida volutpat commodo eu tellus sed. Hac ridiculus cras morbi nec. Volutpat urna ac aliquet tincidunt commodo mus elementum congue. Tempus aliquet ut venenatis sollicitudin tellus diam, vulputate aenean. Aenean lectus tempus elementum sit at pellentesque. 
"
          />
          <ItemHistory urlBg="./images/photo5.png" />
        </div>
        <div class={styles["btn-container"]}>
          <button>
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button>
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </Section>
  );
});
