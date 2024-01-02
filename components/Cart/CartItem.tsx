import styled from "@emotion/styled";
import { CartUI } from "./style";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import useCart from "@/hooks/cart/useCart";
import CommonButton from "@/components/ui/Button/CommonButton";
import {
  getCartState,
  orderDataState,
  orderResultDataState,
} from "@/recoil/atom";
import { useRecoilCallback, useRecoilState } from "recoil";
import CounterQuantity from "./CounterQuantity";
import { useRouter } from "next/router";
import { CSSProperties, useEffect, useMemo } from "react";
import { cartDeletedState } from "@/recoil/selector";
import uuid from "react-uuid";
import useContextModal from "@/context/hooks/useContextModal";

const CartItem = () => {
  const { productDeleteApi, cartOrderApi } = useCart();
  const router = useRouter();

  //이건 조회데이터 담아놓은거
  const [cartState, setCartState] = useRecoilState(getCartState);
  // console.log("cartState", cartState);

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
          const deletedCart = await getCartDeletedState(id);
          setCartState({ ...cartState, data: deletedCart });
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
        console.log("주문하기-->", res);
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
        <CartUI.Flex gap="30px" flexDirection="column">
          <StyledBox
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            height="100%"
            padding="10px"
          >
            {cartState.imageUrl && (
              <StyledImgBox
                src={cartState.imageUrl}
                alt="이미지"
                width={50}
                height={50}
              />
            )}
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
          <StyledCustomBox flexDirection="column" gap="15px">
            {cartState?.data?.map((items) => (
              <div key={uuid()}>
                <StyledBox
                  width="100%"
                  height="116px"
                  backgroundcolor="#fff"
                  flexDirection="column"
                  padding="10px"
                >
                  <CartUI.Flex
                    justifyContent="space-between"
                    alignItems="center"
                  >
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
                  <CartUI.Flex
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <CounterQuantity
                      handleIncrementQuantity={(itemId) =>
                        handleIncrementQuantity(itemId)
                      }
                      handleDecrementQuantity={(itemId) =>
                        handleDecrementQuantity(itemId)
                      }
                      items={items}
                    />
                  </CartUI.Flex>
                </StyledBox>
              </div>
            ))}
          </StyledCustomBox>
          <CommonButton
            onClick={handleOrder}
            variant="contained"
            width="100%"
            height="47px"
          >
            <CartUI.Text color="#fff" fontSize="16px">
              {totalPrice}원 주문하기
            </CartUI.Text>
          </CommonButton>
        </CartUI.Flex>
      )}
    </>
  );
};

const StyledCustomBox = styled(CartUI.Flex)`
  min-height: calc(100vh - 423px);
`;
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
  border: 1px solid #dd8037;
`;

const StyledImgBox = styled(Image)`
  border-radius: 10px;
`;

export default CartItem;
