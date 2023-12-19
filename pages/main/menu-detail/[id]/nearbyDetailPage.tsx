import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Image from "next/image";
import { MainUI } from "@/components/Main/style";
import { BiSolidStar } from "react-icons/bi";
import uuid from "react-uuid";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import { useQuery } from "@tanstack/react-query";
import getNearbyData from "@/context/libs/ssr/getMenuDetail";
import { MenuDetailData } from "@/types/api/menuType";

export function NearbyDetailPage() {
  const router = useRouter();

  const { id } = router.query;

  const { data: nearbyData } = useQuery({
    queryKey: ["nearbyData"],
    queryFn: () => getNearbyData(Number(id)),
  });

  return (
    <StyledFlex flexDirection="column" gap="20px">
      {nearbyData &&
        nearbyData?.map(
          ({
            picture,
            name,
            rating,
            address,
            distance,
            id,
            favorite,
          }: MenuDetailData) => (
            <StyledBox
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
              <div>
                <Image
                  src={picture}
                  alt="이미지"
                  width={70}
                  height={70}
                  style={{ borderRadius: "13px" }}
                />
              </div>
              <MainUI.Flex
                alignItems="center"
                flex="1"
                justifyContent="space-between"
              >
                <MainUI.Flex flexDirection="column" alignItems="start">
                  <MainUI.Text>{name}</MainUI.Text>
                  <MainUI.Flex gap="10px" alignItems="center">
                    <MainUI.Text fontSize="10px" color="#747474">
                      {address}
                    </MainUI.Text>
                    <MainUI.Text
                      fontSize="10px"
                      color="#747474"
                      lineHeight="1.8"
                    >
                      {distance}m
                    </MainUI.Text>
                  </MainUI.Flex>
                </MainUI.Flex>
                <MainUI.Flex width="60px" gap="3px" alignItems="center">
                  <BiSolidStar style={{ color: "#DD8037", fontSize: "15px" }} />
                  <MainUI.Text fontSize="10px">{rating}</MainUI.Text>
                </MainUI.Flex>
              </MainUI.Flex>
            </StyledBox>
          )
        )}
    </StyledFlex>
  );
}

const StyledFlex = styled(MainUI.Flex)`
  cursor: pointer;
  padding-top: 15px;
`;
const StyledBox = styled(CommonBox)`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export default NearbyDetailPage;
