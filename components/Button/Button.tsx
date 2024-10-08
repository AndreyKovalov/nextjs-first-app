import ButtonProps from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";

export const Button = ({
  children,
  appearance,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
