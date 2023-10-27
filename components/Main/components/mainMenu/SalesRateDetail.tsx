import { MainUI } from "@/components/Main/style";
import CommonBox from "@/components/common/CommonBox/CommonBox";
import { nearbyState, menuId } from "@/recoil/atom";
import styled from "@emotion/styled";
import Image from "next/image";
import { BiSolidStar } from "react-icons/bi";
import { useRecoilState, useRecoilValue } from "recoil";
import useProduct from "@/hooks/propduct/useProduct";
import { useEffect } from "react";
import { TNearSnackResponse } from "@/types/api/nearSnackType";
import uuid from "react-uuid";

const SalesRateDetail = () => {
  const { salesRateApi } = useProduct();
  const menuPageId = useRecoilValue(menuId);
  const { isSuccess, data: salesData } = salesRateApi(menuPageId);
  return (
    <StyledFlex flexDirection="column" gap="20px">
      {salesData?.map(
        ({
          picture,
          name,
          ranking,
          rating,
          address,
          distance,
        }: TNearSnackResponse) => (
          <StyledBox
            key={uuid()}
            width="100%"
            backgroundcolor="#f3f3f3"
            height="70px"
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
                <MainUI.Flex gap="10px">
                  <MainUI.Text fontSize="10px" color="#747474">
                    {address}
                  </MainUI.Text>
                  <MainUI.Text fontSize="10px" color="#747474" lineHeight="1.8">
                    {distance}m
                  </MainUI.Text>
                </MainUI.Flex>
              </MainUI.Flex>
              <MainUI.Flex width="60px" gap="3px" alignItems="center">
                <div>
                  <BiSolidStar
                    style={{ color: "#DD8037", fontSize: "15px;" }}
                  />
                </div>
                <MainUI.Text fontSize="10px">{rating}</MainUI.Text>
              </MainUI.Flex>
            </MainUI.Flex>
          </StyledBox>
        )
      )}
    </StyledFlex>
  );
};

const StyledFlex = styled(MainUI.Flex)`
  cursor: pointer;
  padding-top: 15px;
`;
const StyledBox = styled(CommonBox)`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export default SalesRateDetail;
