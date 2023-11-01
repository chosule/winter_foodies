import CommonBox from "@/components/common/CommonBox/CommonBox";
import { BsCartPlus } from "react-icons/bs";
import { MainUI } from "../../style";
import styled from "@emotion/styled";
import CommonButton from "@/components/common/Button/CommonButton";
const StoreMenuCart = () => {
  return (
    <MainUI.Flex gap="20px" flexDirection="column">
      <StyledBox width="100%" height="72px" backgroundcolor="#f3f3f3">
        <MainUI.Text fontWeight="600">어묵</MainUI.Text>
        <MainUI.Text fontWeight="600">500원</MainUI.Text>
        <CartBtn backgroundcolor="#fff" height="55px">
          <BsCartPlus size="2x" style={{ color: "#000" }} />
          <MainUI.Text fontSize="10px" fontWeight="600">
            추가하기
          </MainUI.Text>
        </CartBtn>
      </StyledBox>
      <StyledBox width="100%" height="72px" backgroundcolor="#f3f3f3">
        <MainUI.Text fontWeight="600">어묵</MainUI.Text>
        <MainUI.Text fontWeight="600">500원</MainUI.Text>
        <CartBtn backgroundcolor="#fff" height="55px">
          <BsCartPlus size="2x" style={{ color: "#000" }} />
          <MainUI.Text fontSize="10px" fontWeight="600">
            추가하기
          </MainUI.Text>
        </CartBtn>
      </StyledBox>
      <StyledBox width="100%" height="72px" backgroundcolor="#f3f3f3">
        <MainUI.Text fontWeight="600">어묵</MainUI.Text>
        <MainUI.Text fontWeight="600">500원</MainUI.Text>
        <CartBtn backgroundcolor="#fff" height="55px">
          <BsCartPlus size="2x" style={{ color: "#000" }} />
          <MainUI.Text fontSize="10px" fontWeight="600">
            추가하기
          </MainUI.Text>
        </CartBtn>
      </StyledBox>
    </MainUI.Flex>
  );
};

const StyledBox = styled(CommonBox)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const CartBtn = styled(CommonButton)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 10px;
`;
export default StoreMenuCart;
