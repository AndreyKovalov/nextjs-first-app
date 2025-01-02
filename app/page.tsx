import Menu from "@/components/Menu/Menu";
import styles from "./page.module.css";

export default function Home(): JSX.Element {
  return (
    <div className={styles.main}>
      Main Page
      <Menu />
    </div>
  );
}
