import { Slot, component$ } from '@builder.io/qwik';
import styles from './photos.module.css';
import Section from '~/components/layout/section/section';

export default component$(() => {
  return (
     <>
            <figure>
                <img src="./section/photos.png" />
            </figure>
    <Section id='photos' class={styles.section}>
      <h3>
        <Slot name="title" />
      </h3>
      <Slot />
    </Section>
    </>
  );
});
