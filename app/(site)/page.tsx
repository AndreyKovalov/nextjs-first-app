"use client";
import styles from "./page.module.css";
import { Htag } from "@/components/Htag/Htag";
import { Button } from "@/components/Button/Button";
import { Tag } from "@/components/Tag/Tag";
import { Raiting } from "@/components/Raiting/Raiting";
import { useState } from "react";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(0);
  return (
    <main className={styles.main}>
      <Htag tag="h1">Htag</Htag>
      <Button appearance="primary">Button</Button>
      <Button appearance="ghost">Button</Button>
      <Tag color="red">Tag</Tag>
      <Raiting rating={rating} isEditable={true} setRating={setRating} />
    </main>
  );
}
