import Link from "next/link";
import { GetMenuData } from "../_model/menu";
import Rating from "@/app/_component/Rating";

type Props = {
  menu: GetMenuData;
};
export default function MenuPost({ menu }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <Link
        href="#"
        className="menu-grid w-full border rounded-md items-center  hover:border-color-orange grid-cols-3 bg-color-white"
      >
        <div className="bg-color-orange h-full w-[65px] rounded-md">
          {/* <Image src="" alt="사진" /> */}
        </div>
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
