import styles from "./page.module.css";
import { Htag } from "@/components/Htag/Htag";
import { Button } from "@/components/Button/Button";
import { Tag } from "@/components/Tag/Tag";

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <Htag tag="h1">Htag</Htag>
      <Button appearance="primary">Button</Button>
      <Button appearance="ghost">Button</Button>
      <Tag color="red">Tag</Tag>
    </main>
  );
}
