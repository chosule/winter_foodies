"use client";
import HeaderLayout from "@/app/_component/HeaderLayout";
import { useEffect, useState } from "react";
import { GetMenus } from "./_model/menu";
import MenuPost from "./_component/MenuPost";
import filterMenuData from "./_lib/filterMenuData";
import getMenu from "./_lib/getMenu";
import Tab from "@/app/_component/Tab";

const tabMenu = ["가까운 순", "판매량 순", "리뷰 순", "별점 순"];
type Props = {
  params: {
    menuId: string;
  };
};

export default function MenuDetailPage({ params }: Props) {
  const [selectTab, setSelectTab] = useState(0);
  const [filteredData, setFilteredData] = useState<GetMenus>();

  const { menuId } = params;

  const { menuData } = getMenu(menuId);

  useEffect(() => {
    setFilteredData(menuData);
  }, [menuData]);

  return (
    <div className="px-8">
      <HeaderLayout headerTitle={menuData?.store as string} />
      <div className="flex flex-col gap-5">
        <div className="flex gap-3">
          <Tab
            selectedTab={selectTab}
            onSelectTab={setSelectTab}
            tabMenu={tabMenu}
          />
        </div>
        {selectTab === 0 && (
          <>
            {filterMenuData(filteredData?.data, "distance").map((menu, i) => (
              <MenuPost menuId={menuId} menu={menu} key={`near${i}`} />
            ))}
          </>
        )}
        {selectTab === 1 && (
          <>
            {filterMenuData(filteredData?.data, "sales").map((menu, i) => (
              <MenuPost menuId={menuId} menu={menu} key={`near${i}`} />
            ))}
          </>
        )}
        {selectTab === 2 && (
          <>
            {filterMenuData(filteredData?.data, "review").map((menu, i) => (
              <MenuPost menuId={menuId} menu={menu} key={`near${i}`} />
            ))}
          </>
        )}
        {selectTab === 3 && (
          <>
            {filterMenuData(filteredData?.data, "rating").map((menu, i) => (
              <MenuPost menuId={menuId} menu={menu} key={`near${i}`} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
