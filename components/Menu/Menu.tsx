"use client";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { firstLevelMenu } from "@/helpers/helpers";
import { PageItem } from "@/interfaces/menu.interface";
import { MenuItem } from "@/interfaces/menu.interface";
import { FirstLevelMenuItem } from "@/interfaces/menu.interface";
import cn from "classnames";
import styles from "./Menu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Menu({ data }: { data: MenuItem[] | null }): JSX.Element {
  const [menu, setMenu] = useState<MenuItem[] | null>(data);
  const pathname = usePathname();
  if (!menu) return <>Problem with loading menu</>;
  const openSecondLevel = (secondCategory: string) => {
    const updatedMenu = menu.map((m) => {
      if (m._id.secondCategory === secondCategory) {
        return { ...m, isOpened: !m.isOpened };
      }
      return m;
    });
    setMenu(updatedMenu);
  };

  const buildFirstLevel = () => {
    return (
      <ul>
        {firstLevelMenu.map((menu) => (
          <li key={menu.route}>
            <Link
              href={`/${menu.route}`}
              className={cn(styles.firstLevel, {
                [styles.active]: pathname.includes(`/${menu.route}`),
              })}
            >
              {menu.icon}
              {menu.name}
            </Link>
            {menu.id == TopLevelCategory.Courses && buildSecondLevel(menu)}
          </li>
        ))}
      </ul>
    );
  };
  const buildSecondLevel = (MenuItem: FirstLevelMenuItem) => {
    return (
      <ul className={styles.secondLevelList}>
        {menu.map((m) => {
          if (m.pages.map((p) => p.alias).includes(pathname.split("/")[2])) {
            m.isOpened = true;
          }
          return (
            <li key={m._id.secondCategory}>
              <button
                className={cn(styles.secondLevel, {
                  [styles.active]: m.isOpened,
                })}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </button>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, MenuItem.route)}
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      <ul>
        {pages.map((p) => (
          <li key={p._id}>
            <Link
              href={`/${route}/${p.alias}`}
              replace
              className={cn(styles.thirdLevel, {
                [styles.active]: pathname === `/${route}/${p.alias}`,
              })}
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  return <nav>{buildFirstLevel()}</nav>;
}
