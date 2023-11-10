import Image from "next/image";
import { CartUI } from "./style";
import styled from "@emotion/styled";
import CommonBox from "@/components/common/CommonBox/CommonBox";
import useCart from "@/hooks/cart/useCart";
import CartItem from "./CartItem";
import CommonButton from "../common/Button/CommonButton";

const MyCart = ({}) => {
  return (
    <>
      {isSuccess && (
        <>
          <CartUI.Flex flexDirection="column" justifyContent="space-between">
            <CartUI.Flex gap="10px" flexDirection="column">
              <CartItem />
            </CartUI.Flex>
            <CommonButton width="100%">6800원 주문하기</CommonButton>
          </CartUI.Flex>
        </>
      )}
    </>
  );
};

export default MyCart;
