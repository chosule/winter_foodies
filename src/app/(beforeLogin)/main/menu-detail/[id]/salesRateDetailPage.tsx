import { MainUI } from "@/src/components/Main/style";
import uuid from "react-uuid";
import { useRouter } from "next/router";
import { MenuDetailData } from "@/src/types/api/menuType";
import { useQuery } from "@tanstack/react-query";
import { getSalesRateData } from "@/libs/productApi";
import Skeleton from "@/src/components/Skeleton/Skeleton";
import SectionPartUi from "@/src/components/Main/components/Ui/SectionPartUI";
import { GetStaticProps } from "next";

const SalesRateDetail = (props: any) => {
  const router = useRouter();
  const { id } = router.query;

  const { data: salesData, isLoading } = useQuery(
    ["salesbyPosts"],
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
