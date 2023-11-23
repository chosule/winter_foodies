import { CartUI } from "./style";
import useCart from "@/hooks/cart/useCart";
import CartItem from "./CartItem";
import { useRecoilState } from "recoil";
import { getCartState } from "@/recoil/atom";

const MyCart = () => {
  const {
    getCartApi: { isLoading, isSuccess, data: products },
  } = useCart();

  const [checkCartData, setCheckCartData] = useRecoilState(getCartState);

  if (isLoading) {
    <div>...loding중</div>;
  }

  if (isSuccess) {
    setCheckCartData(products);
  }

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
