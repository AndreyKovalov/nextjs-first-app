"use client";
import { RaitingProps } from "./Raiting.props";
import styles from "./Raiting.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";
import { useEffect, useState, KeyboardEvent } from "react";

export const Raiting = ({
  isEditable,
  rating,
  setRating,
  ...props
}: RaitingProps): JSX.Element => {
  const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );
  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRaiting(i);
  };
  const onclick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };
  const constructRaiting = (currentRating: number) => {
    const updatedArray = raitingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          key={i}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onclick(i + 1)}
          onKeyDown={(e: KeyboardEvent) =>
            isEditable && e.key === "Enter" && onclick(i + 1)
          }
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            className={cn(
              styles.star,
              { [styles.filled]: i < currentRating },
              { [styles.isEditable]: isEditable }
            )}
          />
        </span>
      );
    });
    setRaitingArray(updatedArray);
  };

  useEffect(() => {
    constructRaiting(rating);
  }, [rating]);

  return (
    <div {...props}>
      {raitingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
