"use client";
import styled from "@emotion/styled";
import { CartUI } from "./style";
import CommonBox from "@/src/components/ui/Box";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import useCart from "@/src/hooks/cart/useCart";
import CommonButton from "@/src/components/ui/Button";
import {
  getCartState,
  orderDataState,
  orderResultDataState,
} from "@/src/recoil/atom";
import { useRecoilCallback, useRecoilState } from "recoil";
import CounterQuantity from "./CounterQuantity";
import { useRouter } from "next/router";
import { CSSProperties, useEffect, useMemo } from "react";
import { cartDeletedState } from "@/src/recoil/selector";
import uuid from "react-uuid";
import useContextModal from "@/src/context/hooks/useContextModal";
import Button from "@/src/components/ui/Button";

const CartItem = () => {
  const { productDeleteApi, cartOrderApi } = useCart();
  const router = useRouter();

  //이건 조회데이터 담아놓은거
  const [cartState, setCartState] = useRecoilState(getCartState);

  //주문하기 보낼때 상태
  const [orderState, setOrderState] = useRecoilState(orderDataState);

  //주문하기 후 내역보여줄 atom 담기
  const [, setOrderResultState] = useRecoilState(orderResultDataState);

  const modal = useContextModal();

  const alertModal = () => {
    modal.openAlert({
      message: "장바구니에 상품이 없어 메뉴페이지로 이동합니다.",
      btnText: "확인",
    });
  };
  const getCartDeletedState = useRecoilCallback(
    ({ snapshot }) =>
      async (itemId: string) => {
        const deletedCart = await snapshot.getPromise(cartDeletedState(itemId));
        return deletedCart;
      }
  );

  const handleIncrementQuantity = (itemId: number) => {
    const updatedCartData = cartState.data.map((item) => {
      if (item.itemId === itemId) {
        const newQuantity = item.quantity + 1;
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    setCartState({ ...cartState, data: updatedCartData });
  };

  const handleDecrementQuantity = (itemId: number) => {
    const updatedCartData = cartState?.data?.map((item) => {
      if (item.itemId === itemId) {
        const newQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity,
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

  //삭제하기
  const handleDelete = (id: string) => {
    const itemId = id.toString();
    productDeleteApi.mutate(
      { itemId },
      {
        onSuccess: async (res) => {
          console.log("res?", res);
          const deletedCart = await getCartDeletedState(id);
          setCartState({ ...cartState, data: deletedCart });
          console.log("결과값보기", cartState);
          if (deletedCart.length === 0) {
            alertModal();
            router.back();
          }
        },
      }
    );
  };

  useEffect(() => {
    setOrderState((prevState) => ({
      ...prevState,
      items: cartState?.data?.map((item) => ({
        ...item,
        productId: item.itemId,
      })),
      totalPrice: totalPrice,
    }));
  }, [cartState]);

  //주문하기
  const handleOrder = () => {
    cartOrderApi.mutate(orderState, {
      onSuccess: (res) => {
        setOrderResultState(res);
        router.push(
          {
            pathname: "/cart/order-detail",
          },
          "/cart/order-detail"
        );
      },
    });
  };

  return (
    <>
      {cartState && (
        <div className="flex gap-[30px] flex-col">
          <div className="w-full justify-between items-center h-full p-[10px] border-[#dd8037] border">
            {cartState.imageUrl && (
              <Image
                className="rounded-[10px]"
                src={cartState.imageUrl}
                alt="이미지"
                width={50}
                height={50}
              />
            )}
            <p className="text-[18px] font-[600]">{cartState.storeName} 가게</p>
            <div className="flex flex-col items-center">
              <p className="text-[10px] text-white font-[300]">예상조리시간</p>
              <div className="text-[16px] text-white">
                {cartState.cookingTime} - {cartState.cookingTime + 10}분
              </div>
            </div>
          </div>
          {/*  */}
          <div className="custom-box">
            {cartState?.data?.map((items) => (
              <div key={uuid()}>
                <div className="w-full h-[116px] bg-white flex-col p-[10px] flex border">
                  <div className="flex justify-between items-center">
                    <div className="items-center gap-[8px]">
                      <p>{items.itemName}</p>
                      <p className="text-[#a9a9a9] text-[13px]">
                        개당 {items.price}원
                      </p>
                    </div>
                    <Button className="bg-[transparent] w-[47px]">
                      <IoCloseSharp
                        className="w-[20px] h-[20px] text-black"
                        onClick={() => {
                          handleDelete(String(items.itemId));
                        }}
                      />
                    </Button>
                  </div>
                  <div className="items-center justify-between">
                    <CounterQuantity
                      handleIncrement={handleIncrementQuantity}
                      handleDecrement={handleDecrementQuantity}
                      items={items}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button onClick={handleOrder} width="100%" height="47px">
            <CartUI.Text color="#fff" fontSize="16px">
              {totalPrice}원 주문하기
            </CartUI.Text>
          </Button>
        </div>
      )}
    </>
  );
};

export default CartItem;
