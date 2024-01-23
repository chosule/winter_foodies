import { MainUI } from "@/components/Main/style";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import styled from "@emotion/styled";
import uuid from "react-uuid";
import { useRouter } from "next/router";
import { MenuDetailData } from "@/types/api/menuType";
import { useQuery } from "@tanstack/react-query";
import { getSalesRateData } from "@/libs/productApi";
import Skeleton from "@/pages/Skeleton/Skeleton";
import SectionPartUi from "@/components/Main/components/Ui/SectionPartUI";
import { GetStaticProps } from "next";


// export const getStaticProps:GetStaticProps = async() =>{
//   const router = useRouter(); 
//   const {id} = router.query;
//   const posts = await getSalesRateData(Number(id));
//   return {
//     props:{
//       posts
//     }
//   }
// }


const SalesRateDetail = (props:any) => {
  const router = useRouter();
  const { id } = router.query;

  const { data: salesData, isLoading } = useQuery(['salesbyPosts'],
    () => getSalesRateData(Number(id)),
    props.posts
  );

  if (isLoading) return <Skeleton height="120vh" top="-167px" />;

  return (
    <MainUI.CustomFlex flexDirection="column" gap="20px">
      {salesData?.data?.map(
        ({
          picture,
          name,
          favorite,
          ranking,
          rating,
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
                  rating,
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
};

export default SalesRateDetail;
