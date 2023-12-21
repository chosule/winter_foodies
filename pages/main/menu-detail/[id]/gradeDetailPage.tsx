import { MainUI } from "@/components/Main/style";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import useProduct from "@/hooks/propduct/useProduct";
import Image from "next/image";
import { BiSolidStar } from "react-icons/bi";
import uuid from "react-uuid";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MenuDetailData } from "@/types/api/menuType";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@/pages/Skeleton/Skeleton";
import { getGradeData } from "@/context/libs/ssr/getMenuDetail";
import SectionPartUi from "@/components/Main/components/Ui/SectionPartUI";

const GradeDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: gradeData ,isLoading} = useQuery({
    queryKey: ["gradeData"],
    queryFn: () => getGradeData(Number(id)),
  });

  if (isLoading) return <Skeleton height="120vh" top="-167px"/>

  return (
    <MainUI.CustomFlex flexDirection="column" gap="20px">
    {gradeData?.data?.map(
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



export default GradeDetailPage;
