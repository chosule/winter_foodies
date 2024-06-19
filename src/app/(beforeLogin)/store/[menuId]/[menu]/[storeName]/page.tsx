"use client";
import HeaderLayout from "@/app/_component/HeaderLayout";
import { useState } from "react";
import Tab from "@/app/_component/Tab";
import MenuPriceList from "./_component/MenuPriceList";
import StoreInfo from "./_component/StoreInfo";

type Props = {
  params: {
    menuId: string;
    storeName: string;
  };
};
const tabMenu = ["메뉴", "정보", "리뷰"];

export default function StoreMenuPage({ params }: Props) {
  const { storeName } = params;
  const decodedStoreName = decodeURIComponent(storeName);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <div className="px-8">
      <HeaderLayout
        headerTitle={decodedStoreName}
        heart
        storeName={storeName}
      />
      <div className="flex flex-col gap-4">
        <div className="flex gap-[23px] justify-center">
          <Tab
            tabMenu={tabMenu}
            selectedTab={selectedTab}
            onSelectTab={setSelectedTab}
          />
        </div>
        {selectedTab === 0 && <MenuPriceList params={params} />}
        {selectedTab === 1 && <StoreInfo params={params} />}
      </div>
    </div>
  );
}
