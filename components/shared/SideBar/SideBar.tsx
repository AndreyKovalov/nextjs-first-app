import { Menu } from "@/components/Menu/Menu";
import { SideBarProps } from "./SideBar.props";
import { Suspense } from "react";
import { getMenuData } from "@/helpers/helpers";

export const SideBar = async ({
  ...props
}: SideBarProps): Promise<JSX.Element> => {
  const menuData = await getMenuData();

  return (
    <div {...props}>
      <Suspense fallback={<div>Loading...</div>}>
        <Menu allMenus={menuData} />
      </Suspense>
    </div>
  );
};
