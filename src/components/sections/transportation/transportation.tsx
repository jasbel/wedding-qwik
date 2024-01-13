import { component$ } from "@builder.io/qwik";
import Section from "../../layout/section/section";
import ItemTransportation from "./item-transportation";

import styles from "./transportation.module.scss";

export default component$(() => {
  return (
    <Section id="transportation" class={styles.section}>
      <div class={styles.header}>
        <h2 class={styles.title}>
          {/* <Slot name="title" /> */}
          Transporte
        </h2>
        <p class={styles.description}>
        Dejamos a tu disposición numerosas líneas de transporte que te acercan directamente al lugar del evento, proporcionándote así información detallada para tu conveniencia.
        </p>
      </div>
      <div class={styles["items-container"]}>
        
        <ItemTransportation
          icon="microbus"
          title="Lineas"
          description={[
            "Lineas que dejan a unos metros",
            "108, 138, T, 136, R, 148",
            "otras lineas: 42, 121",
          ]}
        />
        <ItemTransportation icon="taxi" title="Radio Movil" description={["Existen algunas que tienen su central en nuestra zona", "Remix, Oruro"]} />
      </div>
    </Section>
  );
});
