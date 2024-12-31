import { DetailedHTMLProps } from "react";

export interface TagProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  size?: "small" | "medium";
  children: React.ReactNode;
  color?: "ghost" | "green" | "red" | "primary" | "grey";
  href?: string;
}
