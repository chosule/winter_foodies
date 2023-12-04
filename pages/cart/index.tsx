import HeaderLayout from "@/components/layouts/HeaderLayout";
import MyCart from "@/components/Cart/MyCart";
import AuthPrivateLayout from "@/components/layouts/AuthPrivateLayout";

const CartPage = () => {
  return (
    <>
      <HeaderLayout headerTitle="장바구니" />
      <MyCart />
    </>
  );
};

CartPage.getLayout = (page: React.ReactNode) => {
  return <AuthPrivateLayout>{page}</AuthPrivateLayout>;
};

export default CartPage;
