import { getMenu } from "@/app/api/menu";
import { notFound } from "next/navigation";
export default async function Menu(): Promise<JSX.Element> {
  const menu = await getMenu(0);
  if (!menu) return notFound();
  return <div>{JSON.stringify(menu)}</div>;
}
