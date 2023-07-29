import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import History from "~/components/sections/history/history";
import Invitation from "~/components/sections/invitation/invitation";
import Mail from "~/components/sections/mail/mail";
import Photos from "~/components/sections/photos/photos";
import Schedule from "~/components/sections/schedule/schedule";
import Timer from "~/components/sections/timer/timer";
import Transportation from "~/components/sections/transportation/transportation";
import Counter from "~/components/starter/counter/counter";
import Hero from "~/components/layout/hero/hero";
import Infobox from "~/components/starter/infobox/infobox";
import Starter from "~/components/starter/next-steps/next-steps";

export default component$(() => {
  return (
    <>
      <Hero />

      <History />
      <Invitation />
      <Schedule />
      <Transportation />
      <Mail />
      <Photos />
      <Timer />

      <Starter />

      <div class="container container-center container-flex container-spacing-xl">
        <Counter />
        <Infobox>
          <div q:slot="title" class="icon icon-cli">
            CLI Commands
          </div>
        </Infobox>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Bienvenido a mi boda",
  meta: [
    {
      name: "description",
      content: "La union de dos mundos diferentes",
    },
  ],
};
