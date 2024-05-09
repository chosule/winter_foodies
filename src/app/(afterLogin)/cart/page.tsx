import HeaderLayout from "@/src/components/layouts/HeaderLayout";
import MyCart from "@/src/app/(afterLogin)/_component/MyCart";
import AuthPrivateLayout from "@/src/components/layouts/AuthPrivateLayout";

export default function CartPage() {
  return (
    <>
      <HeaderLayout headerTitle="장바구니" />
      <MyCart />
    </>
  );
}
