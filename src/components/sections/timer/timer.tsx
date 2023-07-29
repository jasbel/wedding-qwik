import { Slot, component$ } from '@builder.io/qwik';
import styles from './timer.module.css';
import Section from '~/components/layout/section/section';

export default component$(() => {
  return (
     <>
            <figure>
                <img src="./section/timer.png" />
            </figure>
    <Section id='timer' className={styles.section}>
      <h3>
        <Slot name="title" />
      </h3>
      <Slot />
    </Section>
    </>
  );
});
