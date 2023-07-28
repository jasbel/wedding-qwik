import { component$ } from "@builder.io/qwik";
import styles from "./invitation.module.scss";

interface IItemInvitationProps {
  title?: string;
  date?: string;
  hour?: string;
  direction?: string;
  icon?: string;
  btnTitle?: string;
}

export default component$(
  ({ title = "", btnTitle = "", icon = "" }: IItemInvitationProps) => {
    return (
      <div class={styles.item__content} style={`background-image: url(${icon})`}>
        <div class={styles.item}>
          <h2 class={styles.item__title}>{title}</h2>
          <p class={styles.item__description}>{btnTitle}</p>
          <button title="" />
        </div>
      </div>
    );
  }
);
