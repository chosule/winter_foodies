import { MainUI } from "../../style";
import Image from "next/image";
import StarRating from "./StarRating";
import useConverterMeter from "@/hooks/useConverterMeter";
import { MenuDetailData, MenuDetailDataPartial } from "@/types/api/menuType";

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
      <MainUI.Flex
        alignItems="center"
        flex="0.9"
        justifyContent="space-between"
      >
        <MainUI.Flex flexDirection="column" alignItems="start">
          <MainUI.Text>{name}</MainUI.Text>
          <MainUI.Flex gap="10px" alignItems="center">
            <MainUI.Text fontSize="10px" color="#747474">
              {address}
            </MainUI.Text>
            <MainUI.Text fontSize="10px" color="#747474" lineHeight="1.8">
              {useConverterMeter(Number(distance))}km
            </MainUI.Text>
          </MainUI.Flex>
        </MainUI.Flex>
        <StarRating storeRating={rating} />
      </MainUI.Flex>
    </>
  );
}
