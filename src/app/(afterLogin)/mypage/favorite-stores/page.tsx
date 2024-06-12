"use client";
import { FaStar } from "react-icons/fa";
import getLike from "../../_lib/getLike";
import Link from "next/link";
import HeaderLayout from "@/src/app/_component/HeaderLayout";

const FavoriteStoresPage = (props: any) => {
  const { data } = getLike();

  return (
    <div className="px-8">
      <HeaderLayout headerTitle="찜한매장" />
      <div className="flex flex-col gap-[15px]">
        {data?.data.map((item, i) => (
          <div
            key={`item${i}`}
            className="flex items-center gap-[15px] h-[74px] w-full bg-color-white rounded-md p-3"
          >
            <div className="w-[30px] h-[30px] bg-color-orange flex items-center justify-center rounded-md text-color-white font-medium text-sm">
              {i + 1}
            </div>
            <div className="font-medium">
              {decodeURIComponent(item.storeName)}
            </div>
            <div>
              <Link href={``} className="text-sm">
                메뉴 보러가기
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteStoresPage;
