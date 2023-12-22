import { MainUI } from "@/components/Main/style";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import uuid from "react-uuid";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MenuDetailData } from "@/types/api/menuType";
import { useQuery } from "@tanstack/react-query";
import { getReviewData } from "@/context/libs/ssr/getMenuDetail";
import Skeleton from "@/pages/Skeleton/Skeleton";
import SectionPartUi from "@/components/Main/components/Ui/SectionPartUI";

const ReviesDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: reviewData ,isLoading} = useQuery({
    queryKey: ["reviewData"],
    queryFn: () => getReviewData(Number(id)),
  });

  if (isLoading) return <Skeleton height="120vh" top="-167px"/>

  return (
    <MainUI.CustomFlex flexDirection="column" gap="20px">
      {reviewData?.data?.map(
        ({
          picture,
          name,
          ranking,
          rating,
          favorite,
          address,
          distance,
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
                address,
                rating
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
};

export default ReviesDetailPage;
