import { component$, useSignal } from "@builder.io/qwik";

import History from "./sections/history/history";
import Invitation from "./sections/invitation/invitation";
import Mail from "./sections/mail/mail";
import Photos from "./sections/photos/photos";
import Schedule from "./sections/schedule/schedule";
import Timer from "./sections/timer/timer";
import Transportation from "./sections/transportation/transportation";
import Hero from "./layout/hero/hero";

export const QwikIO = component$(() => {
  const counter = useSignal(0);

  return <>
  <button onClick$={() => counter.value++}>{counter.value}</button>;
      <Hero />
      <History />
      <Invitation />
      <Schedule />
      <Transportation />
      <Mail />
      <Photos />
      <Timer />
  </>
});