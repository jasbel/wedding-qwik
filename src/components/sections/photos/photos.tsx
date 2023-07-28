import { Slot, component$ } from '@builder.io/qwik';
import styles from './photos.module.css';

export default component$(() => {
  return (
     <>
            <figure>
                <img src="./section/photos.png" />
            </figure>
    <div class={styles.section}>
      <h3>
        <Slot name="title" />
      </h3>
      <Slot />
    </div>
    </>
  );
});
