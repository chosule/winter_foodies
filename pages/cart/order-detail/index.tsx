import { CartUI } from "@/components/Cart/style";
import DefaultLayout from "@/components/layouts/Default";
import CommonButton from "@/components/ui/Button/CommonButton";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import useCart from "@/hooks/cart/useCart";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const orderDetailPage = () => {
  const router = useRouter();
  console.log("쿼리확인", router.query);
  const {orderDetailsApi:{ isSuccess, data : orderData}} = useCart();
  console.log('test')
  console.log('주문내역',orderData) 
  return (
    <CartUI.Wrap flexDirection="column" minHeight="calc( 100vh - 99px)" justifyContent="center" gap="56px">
      <CartUI.Flex flexDirection="column" alignItems="center" gap="20px">
        <IoCheckmarkCircleOutline style={{fontSize:"52px"}}/>
        <div>
          <CartUI.Text textAlign="center" fontSize="20px" fontWeight="600">주문이 완료되었습니다!</CartUI.Text>
          <CartUI.Text textAlign="center" fontSize="15px">{`예상 조리시간에 맞춰 \n 방문하시는것을 추천드립니다.`}</CartUI.Text>
        </div>
      </CartUI.Flex>
      <CommonBox width="100%" height="100%" backgroundcolor="#f3f3f3">
        <CartUI.Text>주문내역</CartUI.Text>
        <CartUI.Flex flexDirection="column" padding="20px" gap="20px">
            <StyledUl>
              <StyledLi>주문일자</StyledLi>
              <StyledLi>2023.10.01 11:04:04</StyledLi>
              <StyledLi>상호명</StyledLi>
              <StyledLi>신천붕어빵</StyledLi>
              <StyledLi>예상조리시간</StyledLi>
              <StyledLi>10분 - 20분</StyledLi>
            </StyledUl>
            {/*  */}
            <StyledUl>
              <StyledLi>어묵 4개</StyledLi>
              <StyledLi>2000원</StyledLi>
              <StyledLi>붕어빵 4개</StyledLi>
              <StyledLi>2800원</StyledLi>
            </StyledUl>
            {/*  */}
            <StyledUl>
              <StyledLi>결제금액</StyledLi>
              <StyledLi>6800원</StyledLi>
            </StyledUl>
        </CartUI.Flex>
      </CommonBox>
      <div>
        <CommonButton>확인완료</CommonButton>
      </div>
    </CartUI.Wrap>
  )
};

const StyledUl = styled.ul`
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:5px;
  position:relative;
  height:100%;
  ::after{
    content:"",
    position:absolute;
    width:100%;
    height:1px;
    background-color:pink;
  }
`
const StyledLi = styled.li`
  font-size: 14px;
  color:#7d7b7b;
  :nth-of-type(2n){
    text-align:right;
  }
`
orderDetailPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default orderDetailPage;
