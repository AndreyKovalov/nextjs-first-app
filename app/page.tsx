import styles from "./page.module.css";
import { Raiting } from "@/components/ui/Raiting/Raiting";

export default function Home(): JSX.Element {
  return (
    <div className={styles.main}>
      Main Page
      <Raiting isEditable={true} rating={2} />
    </div>
  );
}
