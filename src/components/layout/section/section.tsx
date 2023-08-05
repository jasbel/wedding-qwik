import { Slot, component$ } from '@builder.io/qwik';
import styles from './section.module.css';

interface ISectionProps {
  id?: string;
  class?: string;
  title?: string;
}

export default component$(({id, class: className, title}: ISectionProps) => {
  return (
    <div class={[styles.section, className]} id={id}>
      {title &&
      <h3>
        <Slot name="title" />
      </h3>
      }
      <Slot />
    </div>
  );
});
