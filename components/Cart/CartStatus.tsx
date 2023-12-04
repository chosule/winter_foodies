import { getCartState } from "@/recoil/atom";
import { NaviUI } from "../layouts/BottomNavigation/style";
import { useRecoilState, useRecoilValue } from "recoil";
import useCart from "@/hooks/cart/useCart";

const CartStatus = () => {
  return (
    <>
      {/* <NaviUI.CartQuantity>{getCart.itemCount}</NaviUI.CartQuantity> */}
      {/* {products && <p>{product.수량}</p>} */}
    </>
  );
};

export default CartStatus;
