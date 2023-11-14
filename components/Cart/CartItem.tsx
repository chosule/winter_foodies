import styled from "@emotion/styled";
import { CartUI } from "./style";
import CommonBox from "../common/CommonBox/CommonBox";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import useCart from "@/hooks/cart/useCart";
import { useEffect, useState } from "react";
import CommonButton from "../common/Button/CommonButton";
import { cartState } from "@/recoil/atom";
import { useRecoilValue } from "recoil";
import CounterQuantity from "./CounterQuantity";

const CartItem = ({ products }) => {
  const { productDeleteApi } = useCart();
  const handleDelete = (itemId) => productDeleteApi.mutate(itemId);

  //서버에 보낼 state만들기
  const [cartItems, setCartItems] = useState({
    items: [],
    totalPrice: 0,
  });

  const handlePlus = (product) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems?.items.findIndex(
        (item) => item.itemId === product.itemId
      );
      let newItems;
      if (existingItemIndex >= 0) {
        newItems = [...prevCartItems.items];
        newItems[existingItemIndex].quantity += 1;
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

  const handleMinus = (product) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems?.items.findIndex(
        (item) => item.itemId === product.itemId
      );
      let newItems;
      if (existingItemIndex >= 0) {
        newItems = [...prevCartItems.items];
        if (newItems[existingItemIndex].quantity > 1) {
          newItems[existingItemIndex].quantity -= 1;
        }
        // return { ...prevCartItems, items: newItems };
      } else {
        newItems = [...prevCartItems?.items, { ...product, quantity: 1 }];
        // return { ...prevCartItems, items: newItems };
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
  console.log("cartItems", cartItems);

  return (
    <>
      {products?.data?.map((items) => (
        <div key={items.itemId}>
          <CartUI.Text fontSize="18px" fontWeight="600">
            {products.storeName} 가게
          </CartUI.Text>
          <StyledBox width="100%" height="100px" backgroundcolor="#fff">
            <CartUI.Flex justifyContent="space-between" alignItems="center">
              <CartUI.Text>{items.itemName}</CartUI.Text>
              <IoCloseSharp onClick={() => handleDelete(items.itemId)} />
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
                  {products.cookingTime + 10} 사이
                </CartUI.Text>
                <p>수량 : {items.quantity}</p>
                <CounterQuantity
                  handlePlus={handlePlus}
                  handleMinus={handleMinus}
                  items={items}
                  cartItems={cartItems}
                />
              </div>
            </CartUI.Flex>
          </StyledBox>
        </div>
      ))}
      <CommonButton variant="contained" width="100%">
        {cartItems.totalPrice}원 주문하기
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
