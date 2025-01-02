import { MenuItem } from "@/interfaces/menu.interface";
import { API } from "./api";

export async function getMenu(
  firstCategory: number
): Promise<MenuItem[] | null> {
  const res = await fetch(API.topPage.find, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstCategory }),
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}
