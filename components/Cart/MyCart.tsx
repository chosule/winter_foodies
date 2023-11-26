import { CartUI } from "./style";
import useCart from "@/hooks/cart/useCart";
import CartItem from "./CartItem";
import { useRecoilState } from "recoil";
import { cartState, getCartState } from "@/recoil/atom";
import { useEffect } from "react";

const MyCart = () => {
  const {
    getCartApi: { isLoading, isSuccess, data: cartData },
  } = useCart();

  const [, setCartState] = useRecoilState(getCartState);

  useEffect(() => {
    if (cartData) {
      setCartState(cartData);
    }
  }, [cartData]);

  if (isLoading) return <div>...loding중</div>;

  return (
    <>
      {isSuccess ? (
        <>
          <CartUI.Flex flexDirection="column" justifyContent="space-between">
            <CartUI.Flex gap="10px" flexDirection="column">
              <CartItem />
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
