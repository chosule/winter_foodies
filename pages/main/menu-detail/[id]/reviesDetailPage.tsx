import { MainUI } from "@/components/Main/style";
import uuid from "react-uuid";
import { useRouter } from "next/router";
import { MenuDetailData } from "@/types/api/menuType";
import { useQuery } from "@tanstack/react-query";
import { getReviewData } from "@/libs/productApi";
import Skeleton from "@/pages/Skeleton/Skeleton";
import SectionPartUi from "@/components/Main/components/Ui/SectionPartUI";
import { GetStaticProps } from "next";

export const getStaticProps:GetStaticProps = async() =>{
  const router = useRouter();
  const {id} = router.query;
  const posts = await getReviewData(Number(id));
  return {
    props:{
      posts
    }
  }
}

const ReviesDetailPage = (props:any) => {
  const router = useRouter();
  const { id } = router.query;

  const { data: reviewData, isLoading } = useQuery(['reviewData'],
  () => getReviewData(Number(id)),
  props.posts
);

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
