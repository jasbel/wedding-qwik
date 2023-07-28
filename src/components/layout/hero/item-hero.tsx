import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.scss";

interface IItemHeroProps {
  urlBg?: string;
  small?: boolean;
}

export default component$(({ urlBg, small }: IItemHeroProps) => {
  return (
    <div class={styles.item}>
      <div
        class={[styles.item__content, small ? styles["item__content--small"] : undefined]}
        style={`background-image: url(${urlBg})`}
      ></div>
    </div>
  );
});
