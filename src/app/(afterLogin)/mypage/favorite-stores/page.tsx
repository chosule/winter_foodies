import { MyPageUI } from "@/src/components/Mypage/style";
import DefaultLayout from "@/src/components/layouts/Default";
import HeaderLayout from "@/src/components/layouts/HeaderLayout";
import CommonBox from "@/src/components/ui/Box";
import Image from "next/image";
import styled from "@emotion/styled";
import { FavoriteStoreType } from "@/src/types/api/favoriteStoreType";
import useConverterMeter from "@/src/hooks/useConverterMeter";
import { FaStar } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getHeartStore } from "../libs/productApi";

const FavoriteStoresPage = (props: any) => {
  const {
    data: stores,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["heartStorePosts"],
    queryFn: getHeartStore,
    initialData: props.posts,
  });

  if (isLoading || !stores) return <div>is Loading.. </div>;

  return (
    <>
      <HeaderLayout headerTitle="찜한매장" />
      {isSuccess ? (
        <>
          {stores?.data?.map(
            ({
              pictureUrl,
              address,
              distance,
              rating,
              storeName,
              id,
            }: FavoriteStoreType) => (
              <div
                className="flex items-center gap-[15px] bg-white h-[74px] w-full"
                key={id}
              >
                <Image
                  className="rounded-[10px]"
                  src={String(pictureUrl)}
                  alt="사진"
                  width={73}
                  height={73}
                />
                <div className="flex items-center justify-between w-full p-[10px]">
                  <div>
                    {storeName}
                    <div className="flex gap-[15px] items-center leading-[1.8]">
                      <p className="text-[11px] text-[#353535]">{address}</p>
                      <p className="text-[11px] text-[#353535]">
                        {useConverterMeter(Number(distance))}m
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaStar className="text-[11px] text-[#dd8037]" />
                    <p className="text-[11px]">{rating}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </>
      ) : (
        <>찜한매장이 아직 없습니다.</>
      )}
    </>
  );
};

export default FavoriteStoresPage;
