import CommonBox from "@/components/common/CommonBox/CommonBox";
import { BsCartPlus } from "react-icons/bs";
import { MainUI } from "../../style";
import styled from "@emotion/styled";
import CommonButton from "@/components/common/Button/CommonButton";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/atom";
import useUserAuth from "@/hooks/auth/useUserAuth";
import { useEffect } from "react";

const StoreMenuCart = () => {
  const user = useRecoilValue(userState); //토큰가져오기
  console.log("user--->", user);
  const { setUserAccessToken } = useUserAuth();
  console.log("userState", setUserAccessToken);
  const handleClick = () => {
    //사용자의 아이디와 제품을 만들어서
  };

  return (
    <MainUI.Flex gap="20px" flexDirection="column">
      <StyledBox width="100%" height="72px" backgroundcolor="#f3f3f3">
        <MainUI.Text fontWeight="600">어묵</MainUI.Text>
        <MainUI.Text fontWeight="600">500원</MainUI.Text>
        <CartBtn backgroundcolor="#fff" height="55px">
          <BsCartPlus style={{ color: "#000" }} />
          <MainUI.Text fontSize="10px" fontWeight="600">
            추가하기
          </MainUI.Text>
        </CartBtn>
      </StyledBox>
      <StyledBox width="100%" height="72px" backgroundcolor="#f3f3f3">
        <MainUI.Text fontWeight="600">어묵</MainUI.Text>
        <MainUI.Text fontWeight="600">500원</MainUI.Text>
        <CartBtn backgroundcolor="#fff" height="55px">
          <BsCartPlus style={{ color: "#000" }} />
          <MainUI.Text fontSize="10px" fontWeight="600">
            추가하기
          </MainUI.Text>
        </CartBtn>
      </StyledBox>
      <StyledBox width="100%" height="72px" backgroundcolor="#f3f3f3">
        <MainUI.Text fontWeight="600">어묵</MainUI.Text>
        <MainUI.Text fontWeight="600">500원</MainUI.Text>
        <CartBtn backgroundcolor="#fff" height="55px">
          <BsCartPlus style={{ color: "#000" }} />
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
