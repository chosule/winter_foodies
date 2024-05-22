import { MainUI } from "../../style";
import Image from "next/image";
import StarRating from "../../../ui/StarRating";
import useConverterMeter from "@/src/hooks/useConverterMeter";
import {
  MenuDetailData,
  MenuDetailDataPartial,
} from "@/src/types/api/menuType";

export default function SectionPartUi({
  picture,
  name,
  address,
  distance,
  rating,
}: MenuDetailDataPartial) {
  return (
    <>
      <div>
        <Image
          src={picture ?? ""}
          alt="이미지"
          width={70}
          height={70}
          style={{ borderRadius: "13px" }}
        />
      </div>
      <div className="flex items-center flex-[0.9] justify-between">
        <div className="flex flex-col items-center">
          <p>{name}</p>
          <div className="flex gap-[10px] items-center">
            <p className="text-[10px] text-[#747474]">{address}</p>
            <p className="text-[10px] text-[#747474]">
              {useConverterMeter(Number(distance))}km
            </p>
          </div>
        </div>
        <StarRating storeRating={rating} />
      </div>
    </>
  );
}
