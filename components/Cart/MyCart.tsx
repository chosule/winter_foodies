import Image from "next/image";
import { CartUI } from "./style";
import styled from "@emotion/styled";
import CommonBox from "@/components/common/CommonBox/CommonBox";
import useCart from "@/hooks/cart/useCart";
import CartItem from "./CartItem";
import CommonButton from "../common/Button/CommonButton";
import { useRecoilState } from "recoil";
import { cartState } from "@/recoil/atom";
import { useEffect } from "react";

const MyCart = () => {
  const {
    getCartApi: { isLoading, isSuccess, data: products },
  } = useCart();
  if (isLoading) {
    <div>...loding중</div>;
  }

  return (
    <>
      {isSuccess ? (
        <>
          <CartUI.Flex flexDirection="column" justifyContent="space-between">
            <CartUI.Flex gap="10px" flexDirection="column">
              <CartItem products={products} />
              {/* ))} */}
            </CartUI.Flex>
          </CartUI.Flex>
        </>
      ) : (
        <div>장바구니에 상품이 담기지않았습니다.</div>
      )}
    </>
  );
};

export default MyCart;
