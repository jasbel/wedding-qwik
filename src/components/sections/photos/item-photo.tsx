import { component$ } from "@builder.io/qwik";
import styles from "./photos.module.scss";

interface IItemPhotoProps {
  url?: string;
}

export default component$(({ url: url = "" }: IItemPhotoProps) => {
  return (
    <div class={[styles.item__wrap]}>
      <div class={styles.item}>
        <figure class={styles.item__figure}>

        <img src={url} class={styles.item__url} />
        </figure>
      </div>
    </div>
  );
});
