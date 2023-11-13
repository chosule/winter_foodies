import styled from "@emotion/styled";
import { CartUI } from "./style";
import CommonBox from "../common/CommonBox/CommonBox";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import { FaMinus } from "react-icons/fa6";
import useCart from "@/hooks/cart/useCart";
import { useEffect, useState } from "react";
import CommonButton from "../common/Button/CommonButton";

const CartItem = ({ products }) => {
  const { productDeleteApi } = useCart();

  const handleDelete = (itemId) => productDeleteApi.mutate(itemId);

  return (
    <>
      {products?.data?.map(({ itemId, price, itemName, quantity }) => (
        <div key={itemId}>
          <CartUI.Text fontSize="18px" fontWeight="600">
            {products.storeName} 가게
          </CartUI.Text>
          <StyledBox width="100%" height="100px" backgroundcolor="#fff">
            <CartUI.Flex justifyContent="space-between" alignItems="center">
              <CartUI.Text>{itemName}</CartUI.Text>
              <IoCloseSharp onClick={() => handleDelete(itemId)} />
            </CartUI.Flex>
            <CartUI.Flex gap="15px">
              <StyledImgBox
                src={products.imageUrl}
                alt="이미지"
                width={70}
                height={70}
              />
              <div>
                <CartUI.Text fontSize="14px">개당가격 : {price} 원</CartUI.Text>
                <CartUI.Text fontSize="14px">
                  {products.cookingTime + 10} 사이
                </CartUI.Text>
                <CounterQuantity quantity={quantity} />
              </div>
            </CartUI.Flex>
          </StyledBox>
        </div>
      ))}
    </>
  );
};

const CounterQuantity = ({ quantity }) => {
  const [counter, setCounter] = useState(quantity);
  const handlePlus = () => {
    setCounter((prev) => prev + 1);
    console.log("counter", counter);
  };
  const handleMinus = () => {
    if (quantity < 2) return;
    setCounter((prev) => prev - 1);
    console.log("counter", counter);
  };
  return (
    <StyledQuantityBox height="20px">
      <StyledButton backgroundcolor="pink" width="0px">
        <HiPlus onClick={handlePlus} />
      </StyledButton>
      {/* {quantity} */}
      {counter}
      <StyledButton backgroundcolor="pink" width="0px">
        <FaMinus onClick={handleMinus} />
      </StyledButton>
    </StyledQuantityBox>
  );
};
const StyledBox = styled(CommonBox)`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

const StyledImgBox = styled(Image)`
  border-radius: 10px;
`;

const StyledQuantityBox = styled(CartUI.Flex)`
  border: 1px solid #000;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
`;
const StyledButton = styled(CommonButton)`
  color: #000;
  min-height: initial;
  width: 15px;
  height: 100%;
`;
export default CartItem;
