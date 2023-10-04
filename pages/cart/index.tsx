import Cart from "@/components/Cart/Cart";
import DefaultLayout from "@/components/layouts/Default";

const CartPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

CartPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default CartPage;
