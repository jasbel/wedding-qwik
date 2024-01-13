import { component$ } from "@builder.io/qwik";
import styles from "./invitation.module.scss";
import ItemInvitation from "./item-invitation";
import Section from "../../layout/section/section";

export default component$(() => {
  return (
    <Section class={styles.section} id="invitation">
      <div class={styles.invitation__wrap}>
        <ItemInvitation
          title="Ceremonia"
          date="Sabado, Enero 27 2024"
          hour="03:00 PM"
          direction="Villa Pagador"
          icon="rings.png"
          btnTitle="Abrir Mapa"
          btnUrl="https://maps.app.goo.gl/UPYfG2c4rgE3wSPR7"
        />
        <figure class={styles.photoContent}>
          <img src="./images/photo-rectangle.png" />
        </figure>
        <ItemInvitation
          title="Recepcion"
          date="Sabado, Enero 27 2024"
          hour="06:00 PM"
          direction="Villa Pagador"
          icon="coups.png"
          btnTitle="Ver Direccion"
          position="bottom"
          btnUrl="https://maps.app.goo.gl/YDCur2fUJ2B9qLn9A "
        />
      </div>
    </Section>
  );
});
