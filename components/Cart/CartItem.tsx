import styled from "@emotion/styled";
import { CartUI } from "./style";
import CommonBox from "../common/CommonBox/CommonBox";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import useCart from "@/hooks/cart/useCart";
import { useEffect, useState } from "react";
import CommonButton from "../common/Button/CommonButton";
import { cartState } from "@/recoil/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import CounterQuantity from "./CounterQuantity";
import {
  TGetCartResponse,
  GetCartDataDetailType,
} from "@/types/api/getCartType";
import { useRouter } from "next/router";

type productsProps = {
  products: TGetCartResponse;
};

interface cartState {
  items: GetCartDataDetailType[];
  totalPrice: number;
}

const CartItem = ({ products }: productsProps) => {
  const { productDeleteApi, CartOrderApi } = useCart();
  const router = useRouter();

  const [cartData, setCartData] = useRecoilState(cartState);
  console.log("리코일 cartData상태확인 ", cartData);

  //삭제하기
  const handleDelete = () => {
    const deleteId = cartData.items.map((item) => {
      return item.itemId;
    });
    console.log("삭제아이디", deleteId);
    productDeleteApi.mutate(deleteId, {
      onSuccess: (res) => {
        console.log("삭제하기 성공 값-->", res);
      },
    });
  };

  //주문하기
  const handleOrder = () => {
    const updatedCartData = {
      ...cartData,
      items: cartData.items.map((item) => {
        const { itemId, ...rest } = item;
        return { productId: itemId, ...rest };
      }),
    };
    console.log("매핑", updatedCartData);
    CartOrderApi.mutate(cartData, {
      onSuccess: (res) => {
        console.log("주문하기-->", res);
        router.push("/cart/order-detail");
      },
    });
  };

  const handlePlus = (product: GetCartDataDetailType) => {
    setCartData((prevCartItems) => {
      const existingItemIndex = prevCartItems?.items?.findIndex(
        (item) => item.itemId === product.itemId
      );
      let newItems;
      if (existingItemIndex >= 0) {
        newItems = [...prevCartItems.items];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + 1,
        };
      } else {
        newItems = [...prevCartItems?.items, { ...product, quantity: 1 }];
      }
      const newTotalPrice = newItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
      return {
        items: newItems,
        totalPrice: newTotalPrice,
      };
    });
  };

  const handleMinus = (product: GetCartDataDetailType) => {
    setCartData((prevCartItems) => {
      const existingItemIndex = prevCartItems?.items?.findIndex(
        (item) => item.itemId === product.itemId
      );
      let newItems;
      if (existingItemIndex >= 0) {
        newItems = [...prevCartItems.items];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity - 1,
        };
      } else {
        newItems = [...prevCartItems?.items, { ...product, quantity: 1 }];
      }
      const newTotalPrice = newItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
      return {
        items: newItems,
        totalPrice: newTotalPrice,
      };
    });
  };
  return (
    <>
      {cartData.items.map((cart) => (
        <div>{cart.itemName}</div>
      ))}
      {products?.data?.map((items) => (
        <div key={items.itemId}>
          <CartUI.Text fontSize="18px" fontWeight="600">
            {products.storeName} 가게
          </CartUI.Text>
          <StyledBox width="100%" height="100px" backgroundcolor="#fff">
            <CartUI.Flex justifyContent="space-between" alignItems="center">
              <CartUI.Text>{items.itemName}</CartUI.Text>
              <IoCloseSharp onClick={handleDelete} />
            </CartUI.Flex>
            <CartUI.Flex gap="15px">
              <StyledImgBox
                src={products.imageUrl}
                alt="이미지"
                width={70}
                height={70}
              />
              <div>
                <CartUI.Text fontSize="14px">
                  개당가격 : {items.price} 원
                </CartUI.Text>
                <CartUI.Text fontSize="14px">
                  주문시간 : {products.cookingTime} -{" "}
                  {products.cookingTime + 10} 사이
                </CartUI.Text>
                <CounterQuantity
                  handlePlus={handlePlus}
                  handleMinus={handleMinus}
                  items={items}
                />
              </div>
            </CartUI.Flex>
          </StyledBox>
        </div>
      ))}
      <CommonButton onClick={handleOrder} variant="contained" width="100%">
        {cartData.totalPrice}원 주문하기
      </CommonButton>
    </>
  );
};

const StyledBox = styled(CommonBox)`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

const StyledImgBox = styled(Image)`
  border-radius: 10px;
`;

export default CartItem;
