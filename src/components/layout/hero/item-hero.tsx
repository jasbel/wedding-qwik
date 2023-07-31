import { component$ } from "@builder.io/qwik";

import styles from "./hero.module.scss";

interface IItemHeroProps {
  urlBg?: string;
  small?: boolean;
}

export default component$(({ urlBg, small }: IItemHeroProps) => {
  return (
    <div class={[styles["item-hero"], small ? styles["item-hero--small"] : undefined]}>
      <div class={[styles["item-hero__content"], small ? styles["item-hero__content--small"] : undefined]} style={`background-image: url(${urlBg})`}></div>
    </div>
  );
});
