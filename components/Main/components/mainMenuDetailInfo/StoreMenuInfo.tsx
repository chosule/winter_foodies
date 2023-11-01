import CommonBox from "@/components/common/CommonBox/CommonBox";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { PiForkKnifeBold } from "react-icons/pi";
import { AiOutlineSmile } from "react-icons/ai";
import { MainUI } from "../../style";
import styled from "@emotion/styled";

const StoreMenuInfo = () => {
  return (
    <StyledInfoBoxWrap width="100%" height="100%" backgroundcolor="#f3f3f3">
      <StyledInfoBox gap="10px">
        <IoLocationOutline />
        <MainUI.Text>경기도 시흥시 신천동 4번출구 앞 포장마차</MainUI.Text>
      </StyledInfoBox>
      <StyledInfoBox gap="10px">
        <HiOutlineExclamationCircle />
        <MainUI.Text>주말에는 푸르지오 앞으로 옮겨요.</MainUI.Text>
      </StyledInfoBox>
      <StyledInfoBox gap="10px">
        <HiOutlineExclamationCircle />
        <MainUI.Flex>
          <MainUI.Text>영업중</MainUI.Text>
          <MainUI.Text>매일 11:00 - 20:00</MainUI.Text>
        </MainUI.Flex>
      </StyledInfoBox>
      <StyledInfoBox gap="10px">
        <PiForkKnifeBold />
        <MainUI.Flex>
          <MainUI.Text>10분 - 20분 예상(조리시간)</MainUI.Text>
        </MainUI.Flex>
      </StyledInfoBox>
      <StyledInfoBox gap="10px">
        <AiOutlineSmile />
        <MainUI.Flex>
          <MainUI.Text>
            조리 시간이 빠르니 주문하시고 바로 찾으러 오세요
          </MainUI.Text>
        </MainUI.Flex>
      </StyledInfoBox>
    </StyledInfoBoxWrap>
  );
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
