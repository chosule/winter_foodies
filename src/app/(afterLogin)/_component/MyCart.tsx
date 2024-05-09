import useCart from "@/src/hooks/cart/useCart";
import CartItem from "./CartItem";
import { useRecoilState } from "recoil";
import { getCartState } from "@/src/recoil/atom";
import { useEffect } from "react";
import Image from "next/image";
import logomainIcon from "@/public/img/logomainIcon.png";
import Skeleton from "@/src/components/Skeleton/Skeleton";

const MyCart = () => {
  const {
    getCartApi: { isLoading, data: cartData },
  } = useCart();

  const [cartState, setCartState] = useRecoilState(getCartState);

  useEffect(() => {
    if (cartData) {
      console.log("cartState?", cartState);
      setCartState(cartData);
    }
  }, [cartData]);

  if (isLoading) return <Skeleton />;

  return (
    <>
      {cartState.data ? (
        <>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-[10px] w-full">
              <CartItem />
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center flex-col gap-[30px] cart-wrap">
          <Image src={logomainIcon} width={148} height={100} alt="로고아이콘" />
          <p>장바구니에 상품이 담기지않았습니다.</p>
        </div>
      )}
    </>
  );
};

export default MyCart;
