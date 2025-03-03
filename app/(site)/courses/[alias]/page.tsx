import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMenu } from "@/app/api/menu";
import { getPage } from "@/app/api/page";

export const metadata: Metadata = {
  title: "Course page",
};

export async function generateStaticParams() {
  const menu = await getMenu(0);
  return menu?.flatMap((m) => m.pages.map((p) => ({ alias: p.alias })));
}

export default async function PageProduct({
  params,
}: {
  params: { alias: string };
}) {
  const page = await getPage(params.alias);
  if (!page) return notFound();
  return <div>{page.category}</div>;
}
