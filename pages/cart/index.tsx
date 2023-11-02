import CommonBox from "@/components/common/CommonBox/CommonBox";
import DefaultLayout from "@/components/layouts/Default";
import { CartUI } from "@/components/Cart/style";
import { BiPlusCircle } from "react-icons/bi";
import { FiMinusCircle } from "react-icons/fi";
import CommonButton from "@/components/common/Button/CommonButton";
import styled from "@emotion/styled";

const CartPage = () => {
  return (
    <CartUI.Flex
      flexDirection="column"
      justifyContent="space-between"
      height="87%"
    >
      <div>
        <StyledBox width="100%">
          <CartUI.Flex alignItems="center" justifyContent="space-between">
            <div>
              <img src="" alt="이미지" />
            </div>
            <CartUI.Text fontWeight="800">붕어빵가게</CartUI.Text>
            <CartUI.Flex
              flexDirection="column"
              gap="5px"
              justifyContent="center"
              alignItems="center"
            >
              <CartUI.Text color="#fff" fontSize="10px">
                예상조리시간
              </CartUI.Text>
              <CartUI.Text color="#fff" fontSize="14px">
                10분~20분
              </CartUI.Text>
            </CartUI.Flex>
          </CartUI.Flex>
        </StyledBox>
        <CartUI.Flex gap="10px" flexDirection="column">
          <CommonBox width="100%" height="100px" backgroundcolor="#E8E8E8">
            <CartUI.Flex padding="20px" flexDirection="column" gap="10px">
              <CartUI.Flex gap="15px" alignItems="center">
                <CartUI.Text>어묵</CartUI.Text>
                <CartUI.Text fontSize="10px">개당 500원</CartUI.Text>
              </CartUI.Flex>
              <CartUI.Flex justifyContent="space-between" alignItems="center">
                <CartUI.Text fontWeight="800">2,000원</CartUI.Text>
                <CartUI.Flex gap="20px" alignItems="center">
                  <StyledButton backgroundcolor="none" disableRipple>
                    <FiMinusCircle />
                  </StyledButton>
                  <CartUI.Text>4</CartUI.Text>
                  <StyledButton backgroundcolor="none" disableRipple>
                    <BiPlusCircle />
                  </StyledButton>
                </CartUI.Flex>
              </CartUI.Flex>
            </CartUI.Flex>
          </CommonBox>
          <CommonBox width="100%" height="100px" backgroundcolor="#E8E8E8">
            <CartUI.Flex padding="20px" flexDirection="column" gap="10px">
              <CartUI.Flex gap="15px" alignItems="center">
                <CartUI.Text>어묵</CartUI.Text>
                <CartUI.Text fontSize="10px">개당 500원</CartUI.Text>
              </CartUI.Flex>
              <CartUI.Flex justifyContent="space-between" alignItems="center">
                <CartUI.Text fontWeight="800">2,000원</CartUI.Text>
                <CartUI.Flex gap="20px" alignItems="center">
                  <StyledButton backgroundcolor="none" disableRipple>
                    <FiMinusCircle />
                  </StyledButton>
                  <CartUI.Text>4</CartUI.Text>
                  <StyledButton backgroundcolor="none" disableRipple>
                    <BiPlusCircle />
                  </StyledButton>
                </CartUI.Flex>
              </CartUI.Flex>
            </CartUI.Flex>
          </CommonBox>
        </CartUI.Flex>
      </div>
      <CommonButton width="100%" variant="contained">
        6800원 주문하기
      </CommonButton>
      <CommonButton>추가하기</CommonButton>
    </CartUI.Flex>
  );
};

const StyledBox = styled(CommonBox)`
  margin: 20px 0;
`;
const StyledButton = styled(CommonButton)`
  color: #000;
  height: 0;
  width: 0;
  font-size: 30px;
`;

CartPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default CartPage;
