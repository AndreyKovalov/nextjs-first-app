import PProps from "./P.props";
import styles from "./P.module.css";
import cn from "classnames";
export const P = ({ children, size = "medium" }: PProps): JSX.Element => {
  return <p className={cn(styles[size])}>{children}</p>;
};
