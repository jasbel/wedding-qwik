import { component$, $, useOnWindow, useSignal } from "@builder.io/qwik";
import styles from "./next-steps.module.css";

export const GETTING_STARTED_STEPS = [
  {
    message:
      "Press and hold the <b>ALT</b> key to activate 'Click-to-Source' mode",
  },
  {
    message: "Create a <b>new Route</b> called <code>/me</code>",
    hint: 'Create a new directory called <code>me</code> in <code>src/routes</code>. Within this directory create a <code>index.tsx</code> file or copy the <code>src/routes/index.tsx</code> file. Your new route is now accessible <a href="/me" target="_blank">here</a> ✨',
  },
  {
    message: "Time to have a look at <b>Forms</b>",
    hint: 'Open <a href="/demo/todolist" target="_blank">the TODO list App</a> and add some items to the list. Try the same with disabled JavaScript 🐰',
  },
];

export default component$(() => {
  const gettingStartedStep = useSignal(0);

  useOnWindow(
    "keydown",
    $((e) => {
      if ((e as KeyboardEvent).key === "Alt") {
        gettingStartedStep.value = 1;
      }
    })
  );

  return (
    <div class="container container-purple container-center">
      <h3>
        Time for a 
        <span class="highlight"> qwik intro</span>?
      </h3>
      <div class={styles.gettingstarted}>
        <div
          class={styles.intro}
          dangerouslySetInnerHTML={
            GETTING_STARTED_STEPS[gettingStartedStep.value].message
          }
        />
        <span
          class={styles.hint}
          dangerouslySetInnerHTML={
            GETTING_STARTED_STEPS[gettingStartedStep.value].hint
          }
        />
      </div>
      {gettingStartedStep.value + 1 < GETTING_STARTED_STEPS.length ? (
        <button class="" onClick$={() => gettingStartedStep.value++}>
          Continue with Step {gettingStartedStep.value + 2} of{" "}
          {GETTING_STARTED_STEPS.length}
        </button>
      ) : (
        <button
          class=""
          onClick$={() => (gettingStartedStep.value = 0)}
        >
          Re-Start
        </button>
      )}
    </div>
  );
});
