import CommonBox from "@/components/common/CommonBox/CommonBox";
import styled from "@emotion/styled";
import { CSSProperties } from "react";
import { MainUI } from "../style";
import useGeolocation from "@/hooks/useGeolacation";

const NearDistance = () => {
  const { handleSuccess } = useGeolocation();
  console.log("ts", handleSuccess);
  return (
    <MainUI.Wrapper gap="10px">
      <MainUI.Flex gap="10px" alignItems="center">
        <MainUI.Text>나와 가장 가까운 간식</MainUI.Text>
        <MainUI.Text color="#DD8037">TOP5</MainUI.Text>
      </MainUI.Flex>
      <MainUI.Flex flexDirection="column" gap="15px">
        {/* {MOCKDATA.map((item) => {
          return (
            <MainUI.Flex key={item.titleId} justifyContent="space-between">
              <StyleBox color="#fff" justifyContent="center">
                {item.titleId}
              </StyleBox>
              <StyleBox
                color="#000"
                justifyContent="space-between"
                flexGrow="0.9"
              >
                <img src={item.img} alt="이미지" />
                <MainUI.Text fontSize="12px">{item.name}</MainUI.Text>
                <MainUI.Flex flexDirection="column" alignItems="center">
                  <MainUI.Text fontSize="10px">현재나와</MainUI.Text>
                  <MainUI.Text fontSize="13px">{item.distance}m</MainUI.Text>
                </MainUI.Flex>
              </StyleBox>
            </MainUI.Flex>
          );
        })} */}
      </MainUI.Flex>
    </MainUI.Wrapper>
  );
};

const StyleBox = styled(CommonBox)<
  Pick<CSSProperties, "justifyContent" | "color" | "flexDirection" | "flexGrow">
>`
  display: flex;
  flex-grow: ${({ flexGrow }) => flexGrow};
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  color: ${({ color }) => color};
  font-weight: 600;
`;

export default NearDistance;
