"use client";
import HeaderLayout from "@/app/_component/HeaderLayout";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { GetMenuData, GetMenus } from "./_model/menu";
import MenuPost from "./_component/MenuPost";
import filterMenuData from "./_lib/filterMenuData";
import getMenu from "./_lib/getMenu";

const tabMenu = [
  { menu: "가까운 순" },
  { menu: "판매량 순" },
  { menu: "리뷰 순" },
  { menu: "별점 순" },
];
type Props = {
  params: {
    menuId: string;
  };
};

export default function MenuDetailPage({ params }: Props) {
  const [selectTab, setSelectTab] = useState(0);

  const { menuId } = params;

  const { menuData } = getMenu(menuId);

  const [filteredData, setFilteredData] = useState<GetMenus>();

  useEffect(() => {
    setFilteredData(menuData);
  }, [menuData]);

  return (
    <div>
      <HeaderLayout headerTitle={menuData?.store as string} />
      <div className="flex flex-col gap-5">
        <div className="flex gap-3">
          {tabMenu.map((tab, index) => {
            return (
              <button
                key={`tab${index}`}
                onClick={() => {
                  setSelectTab(index);
                }}
                className={`py-1 px-2 rounded-xl border font-medium text-[13px] hover:bg-color-orange hover:text-color-white ${
                  index === selectTab
                    ? "bg-color-orange text-color-white"
                    : "bg-color-gray-10"
                }`}
              >
                {tab.menu}
              </button>
            );
          })}
        </div>
        {selectTab === 0 && (
          <>
            {filterMenuData(filteredData?.data, "distance").map((menu, i) => (
              <MenuPost menu={menu} key={`near${i}`} />
            ))}
          </>
        )}
        {selectTab === 1 && (
          <>
            {filterMenuData(filteredData?.data, "sales").map((menu, i) => (
              <MenuPost menu={menu} key={`near${i}`} />
            ))}
          </>
        )}
        {selectTab === 2 && (
          <>
            {filterMenuData(filteredData?.data, "review").map((menu, i) => (
              <MenuPost menu={menu} key={`near${i}`} />
            ))}
          </>
        )}
        {selectTab === 3 && (
          <>
            {filterMenuData(filteredData?.data, "rating").map((menu, i) => (
              <MenuPost menu={menu} key={`near${i}`} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
