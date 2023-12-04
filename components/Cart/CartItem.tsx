import styled from "@emotion/styled";
import { CartUI } from "./style";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import useCart from "@/hooks/cart/useCart";
import CommonButton from "@/components/ui/Button/CommonButton";
import { getCartState, orderDataState, orderResultDataState } from "@/recoil/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import CounterQuantity from "./CounterQuantity";
import {
  GetCartData,
} from "@/types/api/getCartType";
import { useRouter } from "next/router";
import { CSSProperties,useEffect,useMemo } from "react";
import { getCartSelector } from "@/recoil/selector";



// interface cartState {
//   items: GetCartDataDetailType[];
//   totalPrice: number;
// }

type Props = {  
  itemId: number
}

const CartItem = () => {
  const { productDeleteApi, cartOrderApi } = useCart();
  const router = useRouter();
  
  //이건 조회데이터 담아놓은거
  const [cartState, setCartState] = useRecoilState<GetCartData>(getCartState); 
  console.log('cartState',cartState);
  
  //주문하기 보낼때 상태
  const [orderState, setOrderState] = useRecoilState(orderDataState);

  //주문하기 후 내역보여줄 atom 담기 
  const [ ,setOrderResultState] = useRecoilState(orderResultDataState);

  const handleIncrementQuantity = (itemId:number) => {
    const updatedCartData = cartState.data.map((item) => {
      if (item.itemId === itemId) {
        const newQuantity = item.quantity + 1;
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    setCartState({ ...cartState, data: updatedCartData });
  };

  const handleDecrementQuantity = (itemId:number) => {
    const updatedCartData = cartState.data.map((item) => {
      if (item.itemId === itemId) {
        const newQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    setCartState({ ...cartState, data: updatedCartData });
  };

  
  const totalPrice = useMemo(() => {
    return cartState?.data?.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [cartState.data]);


  //삭제하기
  const handleDelete = (itemId:Props) => {
    productDeleteApi.mutate(
      { itemId },
      {
        onSuccess: (res) => {
          console.log("[ 삭제하기api res ]", res);

          setCartData((prevCartItems) => {
            const updatedItems = prevCartItems.items.filter(
              (item) => item.itemId !== deletedId
            );
            const newTotalPrice = updatedItems.reduce(
              (total, item) => total + item.quantity * item.price,
              0
            );

            return {
              items: updatedItems,
              totalPrice: newTotalPrice,
            };
          });
        },
      }
    );
  };

  useEffect(() =>{
    setOrderState((prevState) => ({
      ...prevState,
      items:cartState?.data?.map((item) => ({
        ...item,
        productId : item.itemId
      })),
      totalPrice: totalPrice
    }))
  },[cartState])

  //주문하기
  const handleOrder = () => {
    cartOrderApi.mutate(orderState, {
      onSuccess: (res) => {
        console.log("주문하기-->", res);
        setOrderResultState(res);
        router.push(
          {
            pathname: "/cart/order-detail"
          },
          "/cart/order-detail"
        );
      },
    });
  };

  return (
    <>
      {cartState && (
         <CartUI.Flex gap="15px" flexDirection="column">
         <StyledBox
           width="100%"
           justifyContent="space-between"
           alignItems="center"
           height="100%"
           padding="10px"
         >
           {cartState.imageUrl && <StyledImgBox
             src={cartState.imageUrl}
             alt="이미지"
             width={50}
             height={50}
             
           />}
           <CartUI.Text fontSize="18px" fontWeight="600">
             {cartState.storeName} 가게
           </CartUI.Text>
           <CartUI.Flex flexDirection="column" alignItems="center">
             <CartUI.Text fontSize="10px" color="#fff" fontWeight="300">
               예상조리시간
             </CartUI.Text>
             <CartUI.Text fontSize="16px" color="#fff">
               {cartState.cookingTime} - {cartState.cookingTime + 10}분
             </CartUI.Text>
           </CartUI.Flex>
         </StyledBox>
         {/*  */}
         <StyledCustomBox flexDirection="column" gap="15px">
           {cartState?.data?.map((items) => (
             <div key={items.itemId}>
               <StyledBox
                 width="100%"
                 height="100px"
                 backgroundcolor="#f3f3f3"
                 flexDirection="column"
                 padding="10px"
               >
                 <CartUI.Flex justifyContent="space-between" alignItems="center">
                   <CartUI.Flex alignItems="center" gap="8px">
                     <CartUI.Text>{items.itemName}</CartUI.Text>
                     <CartUI.Text color="#a9a9a9" fontSize="13px">
                       개당 {items.price}원
                     </CartUI.Text>
                   </CartUI.Flex>
                   <CommonButton backgroundcolor="transparent">
                     <IoCloseSharp
                       onClick={() => {
                         handleDelete(items.itemId);
                       }}
                       style={{ width: "20px", height: "20px", color: "#000" }}
                     />
                   </CommonButton>
                 </CartUI.Flex>
                 <CartUI.Flex justifyContent="space-between" alignItems="center">
                   <CounterQuantity
                     handleIncrementQuantity={(itemId) =>
                       handleIncrementQuantity(itemId)
                     }
                     handleDecrementQuantity={(itemId) => 
                      handleDecrementQuantity(itemId)}
                     items={items}
                   />
                 </CartUI.Flex>
               </StyledBox>
             </div>
           ))}
         </StyledCustomBox>
         <CommonButton onClick={handleOrder} variant="contained" width="100%">
           {totalPrice}원 주문하기
         </CommonButton>
       </CartUI.Flex>
      )}
    </>
   
  );
};

const StyledCustomBox = styled(CartUI.Flex)`
  min-height:calc( 100vh - 398px);
`
const StyledBox = styled(CommonBox)<
  Pick<
    CSSProperties,
    "justifyContent" | "flexDirection" | "alignItems" | "padding"
  >
>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding }) => padding};
`;

const StyledImgBox = styled(Image)`
  border-radius: 10px;
`;

export default CartItem;
