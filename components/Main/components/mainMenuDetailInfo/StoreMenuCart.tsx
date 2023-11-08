import CommonBox from "@/components/common/CommonBox/CommonBox";
import { BsCartPlus } from "react-icons/bs";
import { MainUI } from "../../style";
import styled from "@emotion/styled";
import CommonButton from "@/components/common/Button/CommonButton";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/atom";
import useUserAuth from "@/hooks/auth/useUserAuth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useCart from "@/hooks/cart/useCart";
import Image from "next/image";

const StoreMenuCart = () => {
  const user = useRecoilValue(userState);
  const router = useRouter();
  const { menuApi, addNewProductApi } = useCart();

  const { id, picture } = router.query;

  const { data: menuData, isSuccess } = menuApi(id);

  const handleClick = (foodIds) => {
    addNewProductApi.mutate(foodIds, {
      onSuccess: (res) => {
        console.log("데이터저장", res);
      },
    });
  };

  if (!menuData || !menuData.menu) {
    return <div>Loading...</div>;
  }

  return (
    <MainUI.Flex gap="30px" flexDirection="column">
      {menuData.menu.map(({ foodId, menuName, price }) => (
        <MainUI.Flex gap="20px" flexDirection="column" key={foodId}>
          <StyledBox width="100%" height="72px" backgroundcolor="#f3f3f3">
            <StyledText fontWeight="600">{menuName}</StyledText>
            <StyledText fontWeight="600">{price}</StyledText>
            <CartBtn
              backgroundcolor="#fff"
              height="55px"
              onClick={() => {
                handleClick(foodId);
              }}
            >
              <BsCartPlus style={{ color: "#000" }} />
              <StyledText fontSize="10px" fontWeight="600">
                추가하기
              </StyledText>
            </CartBtn>
          </StyledBox>
        </MainUI.Flex>
      ))}
    </MainUI.Flex>
  );
};

const StyledBox = styled(CommonBox)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledText = styled(MainUI.Text)`
  flex: 0.3;
`;
const CartBtn = styled(CommonButton)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 10px;
`;
export default StoreMenuCart;
