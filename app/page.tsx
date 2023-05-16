import Image from "next/image";
import styles from "./page.module.css";
import ToggleSwitch from "@/components/toggle";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello </h1>
      <ToggleSwitch Name="newsletter" />
      <ToggleSwitch Name="daily" />
      <ToggleSwitch Name="weekly" />
      <ToggleSwitch Name="monthly" />
    </main>
  );
}
