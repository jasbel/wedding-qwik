import { component$ } from "@builder.io/qwik";
import styles from "./transportation.module.scss";

type ICar = "taxi" | "microtaxi" | "microbus";

interface IItemInvitationProps {
  icon?: ICar;
  title?: string;
  description?: string[];
}

export default component$(({ title = "", icon, description = [] }: IItemInvitationProps) => {
  return (
    <div class={[styles.item__wrap]}>
      <div class={styles.item}>
        <div style={{ marginBottom: "6px" }}>
          {icon === "taxi" && (
            <>
              <i class="fa-solid fa-taxi"></i>
            </>
          )}
          {icon === "microtaxi" && (
            <>
              <i class="fa-solid fa-car-side"></i>
            </>
          )}
          {icon === "microbus" && (
            <>
              <i class="fa-solid fa-bus"></i>
            </>
          )}
        </div>
        <h2 class={styles.item__title}>{title}</h2>

        {description.map((d, i) => (
          <p class={styles.item__description} key={i}>{d}</p>
        ))}
      </div>
    </div>
  );
});
