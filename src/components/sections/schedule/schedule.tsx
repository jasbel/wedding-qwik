/* eslint-disable qwik/jsx-img */
import { component$, useSignal } from "@builder.io/qwik";
import Section from "~/components/layout/section/section";
import styles from "./schedule.module.scss";
import ScheduleInfo from "./schedule-info";
import ScheduleMenu from "./schedule-menu";

export interface ISchedule {
  title: string;
  description: string[];
  time: string;
  btn: string;
  url: string;
  active?: boolean;
}

const dataSchedule: ISchedule[] = [
  {
    title: "Welcoming Drinks",
    description: ["Enjoy the soft music and beautiful view.   Get to know all our family and friends!", "INANNA TERRACE"],
    time: "5:00 p.m.",
    btn: "Ver en mapa",
    url: "./images/photo5.png",
    active: true,
  },
  {
    title: "Zaffeh & Entrance",
    description: ["Enjoy the soft music and beautiful view.   Get to know all our family and friends!", "INANNA TERRACE"],
    time: "5:30 p.m.",
    btn: "Ver en mapa",
    url: "./images/photo5.png",
  },
  {
    title: "Medium",
    description: ["Enjoy the soft music and beautiful view.   Get to know all our family and friends!", "INANNA TERRACE"],
    time: "7:00 p.m.",
    btn: "Ver en mapa",
    url: "./images/photo5.png",
  },
  {
    title: "Post Dinner Party",
    description: ["Enjoy the soft music and beautiful view.   Get to know all our family and friends!", "INANNA TERRACE"],
    time: "8:30 p.m.",
    btn: "Ver en mapa",
    url: "./images/photo5.png",
  },
  {
    title: "Tha After Party",
    description: ["Enjoy the soft music and beautiful view.   Get to know all our family and friends!", "INANNA TERRACE"],
    time: "12:00 p.m.",
    btn: "Ver en mapa",
    url: "./images/photo5.png",
  },
];

export default component$(() => {
  const data = useSignal(dataSchedule);
  return (
    <Section id="schedule" class={styles.section}>
      <div class={styles.container}>
        <div class={[styles.content, styles["content--right"]]}>
          <ScheduleMenu items={data.value} />
        </div>
        <div class={[styles.content, styles["content--left"]]}>
          <ScheduleInfo item={data.value[0]} />
        </div>
      </div>
    </Section>
  );
});
