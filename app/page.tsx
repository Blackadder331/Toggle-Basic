import Image from "next/image";
import styles from "./page.module.css";
import ToggleSwitch from "@/components/toggle";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Toggle</h1>
      <div className="blue-bar">
        <ToggleSwitch name="newsletter" />
        <ToggleSwitch name="daily" />
        <ToggleSwitch name="weekly" />
        <ToggleSwitch name="monthly" />
      </div>
    </main>
  );
}
