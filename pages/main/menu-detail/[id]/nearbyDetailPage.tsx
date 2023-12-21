import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { MainUI } from "@/components/Main/style";
import uuid from "react-uuid";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import { useQuery } from "@tanstack/react-query";
import getNearbyData from "@/context/libs/ssr/getMenuDetail";
import { MenuDetailData } from "@/types/api/menuType";
import Skeleton from "@/pages/Skeleton/Skeleton";
import SectionPartUi from "@/components/Main/components/Ui/SectionPartUI";

export function NearbyDetailPage() {
  const router = useRouter();

  const { id } = router.query;

  const { data: nearbyData ,isLoading} = useQuery({
    queryKey: ["nearbyData"],
    queryFn: () => getNearbyData(Number(id)),
  });
  if (isLoading) return <Skeleton height="120vh" top="-167px"/>

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
              backgroundcolor="#f3f3f3"
              height="70px"
              onClick={() => {
                console.log('favorite11111', favorite,)
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
            <SectionPartUi picture={picture} name={name} address={address} distance={distance} rating={rating}/>
            </MainUI.CustomBox>
          )
        )}
    </MainUI.CustomFlex>
  );
}


export default NearbyDetailPage;
