import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { PiForkKnifeBold } from "react-icons/pi";
import { AiOutlineSmile } from "react-icons/ai";
import getStoreInfo from "../_lib/getStoreInfo";

type Props = {
  params: {
    menuId: string;
    storeName: string;
  };
};
export default function StoreInfo({ params }: Props) {
  const { menuId, storeName } = params;
  const { data: infoData } = getStoreInfo(menuId, storeName);

  return (
    <div>
      {infoData?.data && (
        <div className="w-full h-full bg-color-white rounded-xl flex-col py-[30px] px-[10px] gap-[25px] flex">
          <div className="flex gap-[10px] items-center border-b-[1px] pb-[11px]">
            <IoLocationOutline />
            <p>{infoData.data.distance}</p>
          </div>
          <div className="flex gap-[10px] items-center border-b-[1px] pb-[11px]">
            <HiOutlineExclamationCircle />
            <p>{infoData.data.intro}</p>
          </div>
          <div className="flex gap-[10px] items-center border-b-[1px] pb-[11px]">
            <HiOutlineExclamationCircle />
            <div className="flex leading-[1.5] gap-[10px]">
              <p className="font-[600]">영업중</p>
              <p>
                매일 {infoData.data.operating.open}:00 -{" "}
                {infoData.data.operating.end}:00
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] items-center border-b-[1px] pb-[11px]">
            <PiForkKnifeBold />
            <p>10분 - 20분 예상(조리시간)</p>
          </div>
          <div className="flex gap-[10px] items-center border-b-[1px] pb-[11px]">
            <AiOutlineSmile />
            <p>{infoData.data.notice}</p>
          </div>
        </div>
      )}
    </div>
  );
}
