import { useRouter } from "next/router";
import { MainUI } from "@/components/Main/style";
import uuid from "react-uuid";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import getNearbyData from "@/libs/productApi";
import { MenuDetailData } from "@/types/api/menuType";
import Skeleton from "@/pages/Skeleton/Skeleton";
import SectionPartUi from "@/components/Main/components/Ui/SectionPartUI";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { nearbyDataState } from "@/recoil/atom";
import WinterFoodClient from "@/api/winterFoodClient";



export async function getStaticProps() {
  // const client = new WinterFoodClient();
  // const post = await client.mainPageNearby(id);
  const router = useRouter();
  const { id } = router.query;
  const post = await getNearbyData(id);
  return {
    props: {
      post
    },
  }
}

export function NearbyDetailPage({post:initialData}) {
  console.log('post?',initialData)
  const router = useRouter();
  const [, setNearbyState] = useRecoilState(nearbyDataState);

  const { id } = router.query;
  const { data:nearbyData ,isLoading} = useQuery( ['nearbyPosts'], () => getNearbyData(id),{
    initialData
  })

  // const { data: nearbyData, isSuccess ,isLoading} = useQuery(
  //   ["near"],getNearbyData,
  //     initialData: props.posts 
    
  // );

  // const { data: nearbyData, isLoading } = useQuery({
  //   queryKey: ["nearbyData"],
  //   queryFn: () => getNearbyData(Number(id)),
  // });

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
