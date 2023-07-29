import { Slot, component$ } from "@builder.io/qwik";
import styles from "./mail.module.css";
import Section from "~/components/layout/section/section";

export default component$(() => {
    return (
        <>
            <figure>
                <img src="./section/mail.png" />
            </figure>
            <Section id="mail" className={styles.section}>
                <h3>
                    <Slot name="title" />
                </h3>
                <Slot />
            </Section>
        </>
    );
});
