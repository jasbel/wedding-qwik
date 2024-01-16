import { component$ } from "@builder.io/qwik";
import styles from "./invitation.module.scss";

interface IItemInvitationProps {

  title?: string;
  date?: string;
  hour?: string;
  direction?: string;
  icon?: string;
  btnTitle?: string;
  btnUrl?: string;
  position?: "bottom";
}

export default component$(
  ({ title = "", btnUrl ="", btnTitle = "", icon = "", date = "", hour = "", direction = "", position }: IItemInvitationProps) => {
    return (
      <div class={[styles.item__wrap, position==="bottom" ? styles["item__wrap--bottom"] : undefined, 'animate__animated animate__bounce']} style={`background-image: url(images/flower-main.png)`}>
        <div class={[styles.item]}>
          <div style={{marginBottom: '6px'}}>
            <img src={"./images/"+icon} />
          </div>
          <h2 class={styles.item__title}>{title}</h2>
          <div class={styles.item__content}>
            <p class={styles.item__description}>
              <span class={styles.item__icon}>
                <i class="fa-solid fa-calendar-days"></i>
              </span>
              <span>{date}</span>
            </p>
            <p class={styles.item__description}>
              <span class={styles.item__icon}>
                <i class="fa-solid fa-clock"></i>
              </span>
              <span>{hour}</span>
            </p>
            <p class={styles.item__description}>
              <span class={styles.item__icon}>
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <span>{direction}</span>
            </p>
          </div>
          <a href={btnUrl} target="_blank" class={styles.item__btn} title={btnTitle}>
            {btnTitle}
          </a>
          {/* <button onClick$={() => window.open(btnUrl, '_blank')} class={styles.item__btn} title="btnTitle">
            {btnTitle}
          </button> */}
        </div>
      </div>
    );
  }
);
