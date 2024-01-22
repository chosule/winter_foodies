import { CartUI } from "./style";
import useCart from "@/hooks/cart/useCart";
import CartItem from "./CartItem";
import { useRecoilState } from "recoil";
import { getCartState } from "@/recoil/atom";
import { useEffect } from "react";
import Image from "next/image";
import logomainIcon from "@/public/img/logomainIcon.png";
import styled from "@emotion/styled";
import Skeleton from "@/pages/Skeleton/Skeleton";

const MyCart = () => {
  const {
    getCartApi: { isLoading, data: cartData },
  } = useCart();

  const [cartState, setCartState] = useRecoilState(getCartState);

  useEffect(() => {
    if (cartData) {
      console.log('cartState?',cartState)
      setCartState(cartData);
    }
  }, [cartData]);

  if (isLoading) return <Skeleton />;

  return (
    <>
      {cartState.data ? (
        <>
          <CartUI.Flex flexDirection="column" justifyContent="space-between">
            <CartUI.Flex gap="10px" flexDirection="column" width="100%">
              <CartItem />
            </CartUI.Flex>
          </CartUI.Flex>
        </>
      ) : (
        <StyledWrap
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap="30px"
        >
          <Image src={logomainIcon} width={148} height={100} alt="로고아이콘" />
          <CartUI.Text>장바구니에 상품이 담기지않았습니다.</CartUI.Text>
        </StyledWrap>
      )}
    </>
  );
};

const StyledWrap = styled(CartUI.Flex)`
  min-height: calc(100vh - 300px);
`;

export default MyCart;
