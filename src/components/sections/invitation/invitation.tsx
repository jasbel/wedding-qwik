import { component$ } from "@builder.io/qwik";
import styles from "./invitation.module.scss";
import ItemInvitation from "./item-invitation";
import Section from "~/components/layout/section/section";

export default component$(() => {
    return (
        <>
            <figure>
                <img src="./section/invitation.png" />
            </figure>
            <Section class={styles.section} id="invitation">
                <div>
                    <ItemInvitation title="Votos" date="Lunes, Julio 30 2022" hour="06:00 PM" direction="Villa Pagador" icon="ring" btnTitle="Abrir Mapa" />
                    <div>
                        <figure class={styles.photoContent}>
                            <img src="./images/photo-rectangle.png" />
                        </figure>
                    </div>
                    <ItemInvitation title="Recepcion" date="Lunes, Julio 30 2022" hour="08:00 PM" direction="Villa Pagador" icon="couple" btnTitle="Ver Direccion" />
                </div>
            </Section>
        </>
    );
});
