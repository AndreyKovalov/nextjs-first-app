import { getPage } from "@/app/api/page";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMenu } from "@/app/api/menu";

export const metadata: Metadata = {
  title: "Product page",
};

export async function generateStaticParams(): Promise<{ alias: string }[]> {
  const menu = await getMenu(0);
  if (!menu) return [];
  return menu.flatMap((item) =>
    item.pages.map((page) => ({ alias: page.alias }))
  );
}

export default async function ProductsPage({
  params,
}: {
  params: { alias: string };
}): Promise<JSX.Element> {
  const page = await getPage(params.alias);
  if (!page) return notFound();
  return <div>{page.title}</div>;
}
