import { Slot, component$ } from '@builder.io/qwik';
import styles from './section.module.css';

interface ISectionProps {
  id?: string;
  class?: string;
}

export default component$(({id, class: className}: ISectionProps) => {
  return (
    <div class={[styles.section, className]} id={id}>
      <h3>
        <Slot name="title" />
      </h3>
      <Slot />
    </div>
  );
});
