import { Slot, component$ } from "@builder.io/qwik";

interface ISectionProps {
  id?: string;
  class?: string;
  title?: string;
  noWrap?: boolean;
}

export default component$(({ id, class: className, title, noWrap = false }: ISectionProps) => {
  return (
    <section class={['section', className]} id={id}>
      {title && (
        <h3>
          <Slot name="title" />
        </h3>
      )}
      {!noWrap ? (
        <div class={"container"}>
          <Slot />
        </div>
      ) : (
        <Slot />
      )}
    </section>
  );
});
