import { component$ } from "@builder.io/qwik";
import styles from "./invitation.module.scss";
import ItemInvitation from "./item-invitation";
import Section from "../../layout/section/section";

export default component$(() => {
  return (
    <Section class={styles.section} id="invitation">
      <div class={styles.invitation__wrap}>
        <ItemInvitation
          title="Votos"
          date="Lunes, Julio 30 2022"
          hour="06:00 PM"
          direction="Villa Pagador"
          icon="rings.png"
          btnTitle="Abrir Mapa"
        />
        <figure class={styles.photoContent}>
          <img src="./images/photo-rectangle.png" />
        </figure>
        <ItemInvitation
          title="Recepcion"
          date="Lunes, Julio 30 2022"
          hour="08:00 PM"
          direction="Villa Pagador"
          icon="coups.png"
          btnTitle="Ver Direccion"
          position="bottom"
        />
      </div>
    </Section>
  );
});
