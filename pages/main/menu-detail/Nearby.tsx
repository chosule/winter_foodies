import { MainUI } from "@/components/Main/style";
import CommonBox from "@/components/common/CommonBox/CommonBox";
import { nearbyState } from "@/recoil/state";
import styled from "@emotion/styled";
import Image from "next/image";
import { BiSolidStar } from "react-icons/bi";
import { useRecoilValue } from "recoil";

const NearbyPage = () => {
  const nearbyData = useRecoilValue(nearbyState);
  console.log("nearby", nearbyData);
  return (
    <StyledFlex flexDirection="column" gap="20px">
      {nearbyData?.map((nearby) => (
        <StyledBox
          key={nearby.id}
          width="100%"
          backgroundcolor="#f3f3f3"
          height="70px"
        >
          <div>
            <Image
              src={nearby.imageUrl}
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
              <MainUI.Text>{nearby.name}</MainUI.Text>
              <MainUI.Flex gap="10px">
                <MainUI.Text fontSize="10px" color="#747474">
                  {nearby.address}
                </MainUI.Text>
                <MainUI.Text fontSize="10px" color="#747474" lineHeight="1.8">
                  {nearby.distance}m
                </MainUI.Text>
              </MainUI.Flex>
            </MainUI.Flex>
            <MainUI.Flex width="60px" gap="3px">
              <BiSolidStar style={{ color: "yellow" }} />
              <p>{nearby.rating}</p>
            </MainUI.Flex>
          </MainUI.Flex>
        </StyledBox>
      ))}
    </StyledFlex>
  );
};

const StyledFlex = styled(MainUI.Flex)`
  cursor: pointer;
  padding-top: 30px;
`;
const StyledBox = styled(CommonBox)`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export default NearbyPage;
