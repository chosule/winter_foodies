import styled from "@emotion/styled";
import { CartUI } from "./style";
import CommonButton from "../common/Button/CommonButton";
import { HiPlus } from "react-icons/hi";
import { FaMinus } from "react-icons/fa6";
import { useRecoilValue } from "recoil";
import { cartState } from "@/recoil/atom";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";

const CounterQuantity = ({ handlePlus, handleMinus, items, cartItems }) => {
  const productData = useRecoilValue(cartState);

  const cartItemFInd = cartItems?.items.find(
    (cartItem) => cartItem.itemId === items.itemId
  );
  const cartQuantity = cartItemFInd?.quantity || 0;

  return (
    <StyledQuantityBox height="20px">
      <StyledButton backgroundcolor="transparent" width="0px">
        <HiPlus onClick={() => handlePlus(items)} style={{ width: "100%" }} />
      </StyledButton>
      {cartQuantity}
      <StyledButton backgroundcolor="transparent" width="0px">
        <FaMinus onClick={() => handleMinus(items)} style={{ width: "100%" }} />
      </StyledButton>
    </StyledQuantityBox>
  );
};

const StyledQuantityBox = styled(CartUI.Flex)`
  border: 1px solid #000;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(CommonButton)`
  color: #000;
  padding: 0;
  width: 15px;
  height: 100%;
`;
export default CounterQuantity;
