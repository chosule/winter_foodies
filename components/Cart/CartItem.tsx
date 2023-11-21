import styled from "@emotion/styled";
import { CartUI } from "./style";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import useCart from "@/hooks/cart/useCart";
import CommonButton from "@/components/ui/Button/CommonButton";
import { cartState, getCartState } from "@/recoil/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import CounterQuantity from "./CounterQuantity";
import {
  TGetCartResponse,
  GetCartDataDetailType,
} from "@/types/api/getCartType";
import { useRouter } from "next/router";
import { CSSProperties, useState } from "react";

type productsProps = {
  products: TGetCartResponse;
};

interface cartState {
  items: GetCartDataDetailType[];
  totalPrice: number;
}

const CartItem = ({ products }: productsProps) => {
  const { productDeleteApi, cartOrderApi } = useCart();
  const router = useRouter();
  const getCartRecoil = useRecoilValue(getCartState);
  // console.log("카트조회 recoil 확인", getCartRecoil);
  const [cartData, setCartData] = useRecoilState(cartState);
  console.log("리코일 cartData상태확인 ", cartData);

  //삭제하기
  const handleDelete = (deletedId) => {
      
    productDeleteApi.mutate(
      ({itemId: deletedId}),
      {
        onSuccess: (res) => {
          console.log("[ 삭제하기api res ]", res);

          setCartData((prevCartItems) => {
            const updatedItems = prevCartItems.items.filter(
              (item) => item.itemId !== deletedId
            );
            const newTotalPrice = updatedItems.reduce(
              (total, item) => total + item.quantity * item.price,
              0
            );

            return {
              items: updatedItems,
              totalPrice: newTotalPrice,
            };
          });
        },
      }
    );
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

    cartOrderApi.mutate(updatedCartData, {
      onSuccess: (res) => {
        console.log("주문하기-->", res);
        router.push(
          {
            pathname: "/cart/order-detail",
            query: res,
          },
          "/cart/order-detail"
        );
      },
    });
  };

  const handlePlus = (product: GetCartDataDetailType) => {
    setCartData((prevCartItems) => {
      const existingItemIndex = prevCartItems?.items?.findIndex(
        (item) => item.itemId === product?.itemId
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
        (item) => item.itemId === product?.itemId
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
    <CartUI.Flex gap="15px" flexDirection="column">
      <StyledBox
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        padding="10px"
      >
        <StyledImgBox
          src={products.imageUrl}
          alt="이미지"
          width={50}
          height={50}
        />
        <CartUI.Text fontSize="18px" fontWeight="600">
          {products.storeName} 가게
        </CartUI.Text>
        <CartUI.Flex flexDirection="column" alignItems="center">
          <CartUI.Text fontSize="10px" color="#fff" fontWeight="300">
            예상조리시간
          </CartUI.Text>
          <CartUI.Text fontSize="16px" color="#fff">
            {products.cookingTime} - {products.cookingTime + 10}분
          </CartUI.Text>
        </CartUI.Flex>
      </StyledBox>
      {/*  */}
      <CartUI.Flex flexDirection="column" gap="15px">
        {getCartRecoil?.data?.map((items) => (
          <div key={items.itemId}>
            <StyledBox
              width="100%"
              height="100px"
              backgroundcolor="#f3f3f3"
              flexDirection="column"
              padding="10px"
            >
              <CartUI.Flex justifyContent="space-between" alignItems="center">
                <CartUI.Flex alignItems="center" gap="8px">
                  <CartUI.Text>{items.itemName}</CartUI.Text>
                  <CartUI.Text color="#a9a9a9" fontSize="13px">
                    개당 {items.price}원
                  </CartUI.Text>
                </CartUI.Flex>
                <CommonButton>
                  <IoCloseSharp
                    onClick={() => {
                      handleDelete(items.itemId);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />
                </CommonButton>
              </CartUI.Flex>
              <CartUI.Flex justifyContent="space-between" alignItems="center">
                <CartUI.Text>{items.price * items.quantity}원</CartUI.Text>
                <CounterQuantity
                  handlePlus={handlePlus}
                  handleMinus={handleMinus}
                  items={items}
                />
              </CartUI.Flex>
            </StyledBox>
          </div>
        ))}
      </CartUI.Flex>
      <CommonButton onClick={handleOrder} variant="contained" width="100%">
        {cartData.totalPrice}원 주문하기
      </CommonButton>
    </CartUI.Flex>
  );
};

const StyledBox = styled(CommonBox)<
  Pick<
    CSSProperties,
    "justifyContent" | "flexDirection" | "alignItems" | "padding"
  >
>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding }) => padding};
`;

const StyledImgBox = styled(Image)`
  border-radius: 10px;
`;

export default CartItem;