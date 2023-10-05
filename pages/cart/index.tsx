import Cart from "@/components/Cart/Cart";
import CommonBox from "@/components/common/CommonBox/CommonBox";
import DefaultLayout from "@/components/layouts/Default";
import { CartUI } from "@/components/Cart/style";

const CartPage = () => {
  return (
    <>
      <CommonBox width="100%">
        <CartUI.Flex justifyContent="space-between">
          <div>
            <img src="" alt="이미지" />
          </div>
          <CartUI.Text>붕어빵가게</CartUI.Text>
          <CartUI.Flex flexDirection="column" gap="5px" justifyContent="center">
            <CartUI.Text color="#fff" fontSize="10px">
              예상조리시간
            </CartUI.Text>
            <CartUI.Text color="#fff" fontSize="14px">
              10분~20분
            </CartUI.Text>
          </CartUI.Flex>
        </CartUI.Flex>
      </CommonBox>
    </>
  );
};

CartPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default CartPage;
