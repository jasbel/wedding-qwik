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
          transportation
        </h2>
        <p class={styles.description}>
          The Dead Sea is a salt lake bordered by Jordan to the east and Palestine to the west. The lake’s surface is 430.5 metres below sea level, making it the LOWEST point on
          Earth!
        </p>
      </div>
      <div class={styles["items-container"]}>
        <ItemTransportation icon="taxi" title="Taxi" description={["Uber is always an easy option."]} />
        <ItemTransportation
          icon="microbus"
          title="microbus"
          description={[
            "      You can find them outside       Building No. (1)       at the arrivals hall.      ",
            "The fees to the Dead Sea is around  40 Jordanian Dinars  (55 USD)",
          ]}
        />
        <ItemTransportation
          icon="microtaxi"
          title="microtaxi"
          description={["You can always contact your hotel for transportation. However, we recommend to book this service ahead of time."]}
        />
      </div>
    </Section>
  );
});
