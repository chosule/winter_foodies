import CommonBox from "@/components/ui/CommonBox/CommonBox";
import styled from "@emotion/styled";
import { CSSProperties, useEffect } from "react";
import { MainUI } from "../style";
import { useQuery } from "@tanstack/react-query";
import { useProjectApi } from "@/context/hooks/useDataContextApi";
import { useContextGeolocation } from "@/context/GeoLocationProvider";
import { TNearSnackResponse } from "@/types/api/nearSnackType";

const NearDistance = () => {
  const location = useContextGeolocation();
  const { client } = useProjectApi();

  const { data: nearSnackData, isLoading } = useQuery(["nearSnack"], () =>
    client.nearDistanceSnack(location?.latitude, location?.longitude)
  );
  return (
    <MainUI.Wrapper gap="17px" minHeight="537px">
      <MainUI.Flex gap="10px" alignItems="center">
        <MainUI.Text fontSize="16px" fontWeight="600">
          나와 가장 가까운 간식
        </MainUI.Text>
        <MainUI.Text fontSize="16px" color="#DD8037" fontWeight="600">
          TOP5
        </MainUI.Text>
      </MainUI.Flex>
      <MainUI.Flex flexDirection="column" gap="15px">
        {nearSnackData &&
          nearSnackData.map(
            ({ ranking, name, distance }: TNearSnackResponse) => (
              <MainUI.Flex key={ranking} justifyContent="space-between">
                <StyleBox color="#fff" justifyContent="center">
                  {ranking}
                </StyleBox>
                <StyledBoxCustom
                  width="130px"
                  color="#000"
                  justifyContent="space-evenly"
                  flexGrow="0.9"
                  backgroundcolor="#fff"
                >
                  {/* <img src={nearSnack.img} alt="이미지" /> */}
                  <MainUI.Flex flex="1" justifyContent="center" width="100%">
                    <MainUI.Text fontSize="15px">{name}</MainUI.Text>
                  </MainUI.Flex>
                  <MainUI.Flex
                    flexDirection="column"
                    alignItems="center"
                    flex="0.3"
                    gap="4px"
                  >
                    <MainUI.Text fontSize="10px">현재나와</MainUI.Text>
                    <MainUI.Text fontSize="15px" color="#DD8037">
                      {distance}m
                    </MainUI.Text>
                  </MainUI.Flex>
                </StyledBoxCustom>
              </MainUI.Flex>
            )
          )}
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

const StyledBoxCustom = styled(StyleBox)`
  border: 1px solid #e7e7e7;
`;

export default NearDistance;
