"use client";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { firstLevelMenu } from "@/helpers/helpers";
import {
  PageItem,
  MenuItem,
  FirstLevelMenuItem,
  MenuProps,
} from "@/interfaces/menu.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import cn from "classnames";
import styles from "./Menu.module.css";

export function Menu({ allMenus }: MenuProps): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(
    TopLevelCategory.Courses
  );
  const [menuState, setMenuState] = useState<MenuItem[] | null>(
    allMenus[TopLevelCategory.Courses]
  );
  const pathname = usePathname();

  if (!menuState) {
    return <div></div>;
  }

  const toggleCategory = (category: number) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
    setMenuState(allMenus[category]);
  };

  const toggleSecondLevel = (secondCategory: string) => {
    setMenuState((prevState) => {
      if (!prevState) return null;
      return prevState.map((m) => ({
        ...m,
        isOpened: m._id.secondCategory === secondCategory ? !m.isOpened : false,
      }));
    });
  };

  const renderThirdLevel = (pages: PageItem[], route: string): JSX.Element => (
    <ul className={styles.thirdLevelList}>
      {pages.map((page) => (
        <li key={page._id}>
          <Link
            href={`/${route}/${page.alias}`}
            replace
            className={cn(styles.thirdLevel, {
              [styles.active]: pathname === `/${route}/${page.alias}`,
            })}
          >
            {page.title}
          </Link>
        </li>
      ))}
    </ul>
  );

  const renderSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => (
    <ul className={styles.secondLevelList}>
      {menuState.map((m) => {
        const isCurrentPage = m.pages
          .map((p) => p.alias)
          .includes(pathname.split("/")[2]);

        if (isCurrentPage) {
          m.isOpened = true;
        }

        return (
          <li key={m._id.secondCategory}>
            <button
              className={cn(styles.secondLevel, {
                [styles.active]: m.isOpened,
              })}
              onClick={() => toggleSecondLevel(m._id.secondCategory)}
            >
              {m._id.secondCategory}
            </button>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {renderThirdLevel(m.pages, menuItem.route)}
            </div>
          </li>
        );
      })}
    </ul>
  );

  const renderFirstLevel = (): JSX.Element => (
    <ul className={styles.firstLevelList}>
      {firstLevelMenu.map((menu) => (
        <li key={menu.route}>
          <Link
            href={`/${menu.route}`}
            className={cn(styles.firstLevel, {
              [styles.active]:
                selectedCategory === menu.id ||
                (selectedCategory !== null &&
                  pathname.includes(`/${menu.route}`)),
            })}
            onClick={() => toggleCategory(menu.id)}
          >
            {menu.icon}
            {menu.name}
          </Link>
          {selectedCategory === menu.id && renderSecondLevel(menu)}
        </li>
      ))}
    </ul>
  );

  return <nav className={styles.menu}>{renderFirstLevel()}</nav>;
}
