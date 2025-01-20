import { Menu } from "@/components/Menu/Menu";
import { SideBarProps } from "./SideBar.props";
import { getMenu } from "@/app/api/menu";
import { Suspense } from "react";

export const SideBar = async ({
  ...props
}: SideBarProps): Promise<JSX.Element> => {
  const menu = await getMenu(0);
  return (
    <div {...props}>
      <Suspense fallback={<div>Loading...</div>}>
        <Menu data={menu} />
      </Suspense>
    </div>
  );
};
