import { component$, useSignal } from "@builder.io/qwik";

import History from "./sections/history/history";
import Invitation from "./sections/invitation/invitation";
// import Music from "./Music.astro";
// import Mail from "./sections/mail/mail";
// import Photos from "./sections/photos/photos";
// import Schedule from "./sections/schedule/schedule";
import Timer from "./sections/timer/timer";
import Transportation from "./sections/transportation/transportation";
import Hero from "./layout/hero/hero";
import Header from "./layout/header/header";

export const QwikIO = component$(() => {

  return <>
      <Header />
      <Hero />
      {/* <History /> */}
      <Invitation />
      {/* <Schedule /> */}
      <Transportation />
      {/* <Mail /> */}
      {/* <Photos /> */}
      <Timer client:load />
  </>
});