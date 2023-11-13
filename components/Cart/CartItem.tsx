import styled from "@emotion/styled";
import { CartUI } from "./style";
import CommonBox from "../common/CommonBox/CommonBox";
import Image from "next/image";
import { FiMinusCircle } from "react-icons/fi";
import { PiCookingPotBold } from "react-icons/pi";
import { FaMinus } from "react-icons/fa6";
import { BiPlusCircle } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import useCart from "@/hooks/cart/useCart";
import { useEffect, useState } from "react";
import CommonButton from "../common/Button/CommonButton";

const CartItem = ({ products }) => {
  const { productDeleteApi, addNewProductApi } = useCart();
  const [time, setTime] = useState();
  const [quantity, setQuantity] = useState({ quantity: 1 });

  useEffect(() => {
    setTime(products.cookingTime + 10);
    console.log(time);
  }, []);

  const handleMinus = () => {
    if (quantity < 2) return;
    setQuantity({ ...quantity, quantity: quantity - 1 });
  };

  const handlePlus = () => {
    setQuantity((prev) => ({ ...prev, quantity: quantity + 1 }));
  };
  // const handleDelete = (itemId) => productDeleteApi.mutate(itemId);

  return (
    <>
      {products.data.map(({ itemId, price, itemName }) => (
        <div key={crypto.randomUUID()}>
          <CartUI.Text fontSize="18px" fontWeight="600">
            {products.storeName} 가게
          </CartUI.Text>
          {/*  */}
          <StyledBox width="100%" height="100px" backgroundcolor="#fff">
            <CartUI.Flex justifyContent="space-between" alignItems="center">
              <CartUI.Text>{itemName}</CartUI.Text>
              <IoCloseSharp
                onClick={() => handleDelete(itemId)}
                style={{ fontSize: "20px" }}
              />
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
                  예상조리시간 : {products.cookingTime} ~ {time} 사이
                </CartUI.Text>
                <StyledQuantityBox height="20px">
                  <StyledButton backgroundcolor="pink" width="0px">
                    <HiPlus onClick={handlePlus} />
                  </StyledButton>
                  {quantity}
                  <StyledButton backgroundcolor="pink" width="0px">
                    <FaMinus onClick={handleMinus} />
                  </StyledButton>
                </StyledQuantityBox>
              </div>
            </CartUI.Flex>
          </StyledBox>
        </div>
      ))}
    </>
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
