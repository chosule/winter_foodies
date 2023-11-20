import DefaultLayout from "@/components/layouts/Default";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import MyCart from "@/components/Cart/MyCart";

const CartPage = () => {
  return (
    <>
      <HeaderLayout headerTitle="장바구니" />
      <MyCart />
    </>
  );
};

CartPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default CartPage;
