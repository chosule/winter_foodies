import { useRouter } from "next/router";
import { MainUI } from "@/components/Main/style";
import uuid from "react-uuid";
import { useQuery } from "@tanstack/react-query";
import getNearbyData from "@/context/libs/ssr/getMenuDetail";
import { MenuDetailData } from "@/types/api/menuType";
import Skeleton from "@/pages/Skeleton/Skeleton";
import SectionPartUi from "@/components/Main/components/Ui/SectionPartUI";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { nearbyDataState } from "@/recoil/atom";

export function NearbyDetailPage() {
  const router = useRouter();
  const [, setNearbyState] = useRecoilState(nearbyDataState);

  const { id } = router.query;
  const { data: nearbyData, isLoading } = useQuery({
    queryKey: ["nearbyData"],
  queryFn: () => getNearbyData(Number(id)),
  });


  useEffect(() => {
    setNearbyState(nearbyData);
  }, [nearbyData]);

  if (isLoading) return <Skeleton height="120vh" top="-167px" />;

  return (
    <MainUI.CustomFlex flexDirection="column" gap="20px">
      {nearbyData &&
        nearbyData?.data?.map(
          ({
            picture,
            name,
            rating,
            address,
            distance,
            id,
            favorite,
          }: MenuDetailData) => (
            <MainUI.CustomBox
              key={uuid()}
              width="100%"
              height="70px"
              onClick={() => {
                // console.log("favorite11111", favorite);
                router.push({
                  pathname: "/main/menu-detail/[id]/[detailId]",
                  query: {
                    id: id,
                    favorite,
                    detailId: name,
                    name,
                    picture,
                    rating,
                    address,
                  },
                });
              }}
            >
              <SectionPartUi
                picture={picture}
                name={name}
                address={address}
                distance={distance}
                rating={rating}
              />
            </MainUI.CustomBox>
          )
        )}
    </MainUI.CustomFlex>
  );
}

export default NearbyDetailPage;
