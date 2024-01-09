import CommonBox from "@/components/ui/CommonBox/CommonBox";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { PiForkKnifeBold } from "react-icons/pi";
import { AiOutlineSmile } from "react-icons/ai";
import { MainUI } from "../../style";
import styled from "@emotion/styled";
import useProduct from "@/hooks/propduct/useProduct";
import { useRouter } from "next/router";

const StoreMenuInfo = () => {
  const router = useRouter();
  const {id} = router.query;
  const {storeInfoApi} = useProduct();
  const {isSuccess, data: storeInfo} = storeInfoApi(Number(id));

  return (
    <>
    {isSuccess ? (
      <>
        <StyledInfoBoxWrap width="100%" height="100%" backgroundcolor="#f3f3f3">
          <StyledInfoBox gap="10px">
            <IoLocationOutline />
            <MainUI.Text>{storeInfo.address}</MainUI.Text>
          </StyledInfoBox>
          <StyledInfoBox gap="10px">
            <HiOutlineExclamationCircle />
            <MainUI.Text>{storeInfo.ownerComment}</MainUI.Text>
          </StyledInfoBox>
          <StyledInfoBox gap="10px">
            <HiOutlineExclamationCircle />
            <MainUI.Flex lineHeight="1.5" gap="10px">
              <MainUI.Text fontWeight="600">영업중</MainUI.Text>
              <MainUI.Text>매일 11:00 - 20:00</MainUI.Text>
            </MainUI.Flex>
          </StyledInfoBox>
          <StyledInfoBox gap="10px">
            <PiForkKnifeBold />
            <MainUI.Flex >
              <MainUI.Text>10분 - 20분 예상(조리시간)</MainUI.Text>
            </MainUI.Flex>
          </StyledInfoBox>
          <StyledInfoBox gap="10px">
            <AiOutlineSmile />
            <MainUI.Flex>
              <MainUI.Text>
                {storeInfo.ownerComment}
              </MainUI.Text>
            </MainUI.Flex>
          </StyledInfoBox>
        </StyledInfoBoxWrap>
      </>
    ) : (
      <></>
    )}
    </>
  )
};

const StyledInfoBoxWrap = styled(CommonBox)`
  display: flex;
  flex-direction: column;
  padding: 30px 10px;
  gap: 25px;
`;

const StyledInfoBox = styled(MainUI.Flex)`
  padding-bottom: 25px;
  border-bottom: 1px solid #fff;
`;
export default StoreMenuInfo;
