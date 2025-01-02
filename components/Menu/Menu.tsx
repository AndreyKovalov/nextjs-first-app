import { getMenu } from "@/app/api/menu";
export default async function Menu(): Promise<JSX.Element> {
  const menu = await getMenu(0);
  return <div>{JSON.stringify(menu)}</div>;
}
