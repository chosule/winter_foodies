import { MainUI } from "@/components/Main/style";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import styled from "@emotion/styled";
import uuid from "react-uuid";
import { useRouter } from "next/router";
import { MenuDetailData } from "@/types/api/menuType";
import { useQuery } from "@tanstack/react-query";
import {getSalesRateData} from "@/context/libs/ssr/getMenuDetail"
import Skeleton from "@/pages/Skeleton/Skeleton";
import SectionPartUi from "@/components/Main/components/Ui/SectionPartUI";


const SalesRateDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: salesData ,isLoading} = useQuery({
    queryKey: ["rateData"],
    queryFn: () => getSalesRateData(Number(id)),
  });

  if (isLoading) return <Skeleton height="120vh" top="-167px"/>

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
              backgroundcolor="#f3f3f3"
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

export default SalesRateDetail;