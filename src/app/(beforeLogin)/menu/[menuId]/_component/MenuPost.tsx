import Link from "next/link";
import { GetMenuData } from "../_model/menu";
import Rating from "@/app/_component/Rating";
import getStoreMenu from "@/app/(beforeLogin)/store/[menuId]/[menu]/[storeName]/_lib/getStoreMenu";
import Image from "next/image";

type Props = {
  menu: GetMenuData;
  menuId: string;
};

export default function MenuPost({ menu, menuId }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <Link
        href={`/store/${menuId}/menu/${menu.store}`}
        className="menu-grid w-full border rounded-md items-center  hover:border-color-orange grid-cols-3 bg-color-white"
      >
        <Image
          className="rounded-md"
          src={menu.image}
          alt="사진"
          width={70}
          height={75}
        />
        <div className="py-3 flex flex-col gap-1">
          <h1 className="text-[14px] font-medium">{menu.store}</h1>
          <div className="flex gap-2">
            <h4 className="text-xs">{menu.position}</h4>
            <h4 className="text-xs">{menu.distance}m</h4>
          </div>
        </div>
        <Rating rating={menu.rating} />
      </Link>
    </div>
  );
}
