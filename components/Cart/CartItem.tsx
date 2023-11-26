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
import { CSSProperties, useEffect, useMemo, useState } from "react";
import { getCartDataSelector } from "@/recoil/selectors";

type productsProps = {
  products: TGetCartResponse;
};

interface cartState {
  items: GetCartDataDetailType[];
  totalPrice: number;
}

const CartItem = () => {
  const { productDeleteApi, cartOrderApi } = useCart();
  const router = useRouter();
  const getCart = useRecoilValue(getCartState);
  // console.log('getCart',getCart)

  const [cartState, setCartState] = useRecoilState(getCartState); //이건 조회데이터 담아놓은거
  console.log("cartState", cartState);

  // console.log("recoil 카트 데이터", getTest);

  // const [cartData, setCartData] = useRecoilState(cartState); //이건주문하기할때 이렇게 보내야할듯..?

  //궁금점
  //1. 왜 handleIncrementQuantity 안에 const updatedCartData를 또 만들엇는지

  const handleIncrementQuantity = (itemId) => {
    const updatedCartData = cartState.data.map((item) => {
      if (item.itemId === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCartState({ ...cartState, data: updatedCartData });
  };
  const totalPrice = useMemo(() => {
    return cartState?.data?.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [cartState.data]);

  const handleOrider = () => {
    // 주문하기 api 호출해서, cartState와 totalPrice 담아 보내기
  };
  //삭제하기
  const handleDelete = (deletedId) => {
    productDeleteApi.mutate(
      { itemId: deletedId },
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
          src={cartState.imageUrl}
          alt="이미지"
          width={50}
          height={50}
        />
        <CartUI.Text fontSize="18px" fontWeight="600">
          {cartState.storeName} 가게
        </CartUI.Text>
        <CartUI.Flex flexDirection="column" alignItems="center">
          <CartUI.Text fontSize="10px" color="#fff" fontWeight="300">
            예상조리시간
          </CartUI.Text>
          <CartUI.Text fontSize="16px" color="#fff">
            {cartState.cookingTime} - {cartState.cookingTime + 10}분
          </CartUI.Text>
        </CartUI.Flex>
      </StyledBox>
      {/*  */}
      <CartUI.Flex flexDirection="column" gap="15px">
        {cartState?.data?.map((items) => (
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
                <CommonButton backgroundcolor="transparent">
                  <IoCloseSharp
                    onClick={() => {
                      handleDelete(items.itemId);
                    }}
                    style={{ width: "20px", height: "20px", color: "#000" }}
                  />
                </CommonButton>
              </CartUI.Flex>
              <CartUI.Flex justifyContent="space-between" alignItems="center">
                {items.quantity}
                <CartUI.Text>{items.price * items.quantity}원</CartUI.Text>
                <CounterQuantity
                  handleIncrementQuantity={(itemId) =>
                    handleIncrementQuantity(itemId)
                  }
                  items={items}
                />
              </CartUI.Flex>
            </StyledBox>
          </div>
        ))}
      </CartUI.Flex>
      {/* <CommonButton onClick={handleOrder} variant="contained" width="100%">
        {cartData.totalPrice}원 주문하기
      </CommonButton> */}
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
