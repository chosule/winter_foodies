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

const CartItem = () => {
  // const {
  //   getCartApi: { isLoading, isSuccess, data: products },
  // } = useCart();

  // console.log("getCart", products);

  // if (isLoading) return <div>...loading</div>;
  // const { productDeleteApi } = useCart();

  // const handleDelete = (itemId) => productDeleteApi.mutate(itemId);

  return (
    <></>
    // <>
    //   {products.data.map(({ itemName, price, userId, itemId }) => (
    //     <div key={crypto.randomUUID()}>
    //       <CartUI.Text fontSize="18px" fontWeight="600">
    //         {products.storeName} 가게
    //       </CartUI.Text>
    //       {/*  */}
    //       <StyledBox width="100%" height="100px" backgroundcolor="#fff">
    //         <CartUI.Flex justifyContent="space-between" alignItems="center">
    //           <CartUI.Text>{itemName}</CartUI.Text>
    //           <IoCloseSharp
    //             onClick={() => handleDelete(itemId)}
    //             style={{ fontSize: "20px" }}
    //           />
    //         </CartUI.Flex>
    //         <CartUI.Flex gap="15px">
    //           <StyledImgBox
    //             src={products.imageUrl}
    //             alt="이미지"
    //             width={70}
    //             height={70}
    //           />
    //           <ul>
    //             <CartUI.Text fontSize="14px">개당가격 : {price} 원</CartUI.Text>
    //             <CartUI.Text fontSize="14px">
    //               예상조리시간 : {products.cookTime} ~ 사이
    //             </CartUI.Text>
    //             <CartUI.Text fontSize="14px">
    //               <CartUI.Flex>
    //                 <div>2000원</div>
    //                 <CartUI.Flex gap="10px">
    //                   <HiPlus />
    //                   <FaMinus />
    //                 </CartUI.Flex>
    //               </CartUI.Flex>
    //             </CartUI.Text>
    //           </ul>
    //         </CartUI.Flex>
    //       </StyledBox>
    //     </div>
    //   ))}
    // </>
  );
};
const StyledBox = styled(CommonBox)`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

const StyledImgBox = styled(Image)`
  border-radius: 10px;
  border: 1px solid #000;
`;
export default CartItem;
