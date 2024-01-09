import { CartUI } from "@/components/Cart/style";
import DefaultLayout from "@/components/layouts/Default";
import CommonButton from "@/components/ui/Button/CommonButton";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import useContextModal from "@/context/hooks/useContextModal";
import useCart from "@/hooks/cart/useCart";
import { orderResultDataState } from "@/recoil/atom";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useRecoilValue } from "recoil";

const orderDetailPage = () => {
  const router = useRouter();
  const modal = useContextModal();

  const {
    orderDetailsApi: { isSuccess, data: orderData },
  } = useCart();

  // console.log('주문내역 api', orderData)

  //주문하기 후 내역보여줄 atom
  const orderResultState = useRecoilValue(orderResultDataState);

  console.log("orderResultState", orderResultState);

  const openModal = () => {
    modal.openAlert({
      title: "알림",
      message: "주문이 완료되어 메인페이지로 이동합니다.",
      btnText: "확인",
    });
  };

  const completeOrder = () => {
    openModal();
    router.push("/");
  };

  return (
    <>
      {orderResultState ? (
        <>
          <CartUI.Wrap
            flexDirection="column"
            minHeight="calc( 100vh - 99px)"
            justifyContent="center"
            gap="56px"
          >
            <CartUI.Flex flexDirection="column" alignItems="center" gap="20px">
              <IoCheckmarkCircleOutline style={{ fontSize: "52px" }} />
              <div>
                <CartUI.Text
                  textAlign="center"
                  fontSize="20px"
                  fontWeight="600"
                >
                  주문이 완료되었습니다!
                </CartUI.Text>
                <CartUI.Text
                  textAlign="center"
                  fontSize="15px"
                >{`예상 조리시간에 맞춰 \n 방문하시는것을 추천드립니다.`}</CartUI.Text>
              </div>
            </CartUI.Flex>
            <CommonBox width="100%" height="100%" backgroundcolor="#f3f3f3">
              <CartUI.Flex flexDirection="column" padding="20px" gap="20px">
                <CartUI.Text textAlign="center">주문내역</CartUI.Text>
                <StyledUl>
                  <StyledLi>주문일자</StyledLi>
                  <StyledLi>{orderResultState.orderTime}</StyledLi>
                  <StyledLi>상호명</StyledLi>
                  <StyledLi>{orderResultState.storeName}</StyledLi>
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
                  <StyledLi>{orderResultState.totalPrice}</StyledLi>
                </StyledUl>
              </CartUI.Flex>
            </CommonBox>
            <div>
              <CommonButton width="100%" variant="text" onClick={completeOrder}>
                확인완료
              </CommonButton>
            </div>
          </CartUI.Wrap>
        </>
      ) : (
        <>
          {" "}
          <div>주문이 정상적으로 이루어지지않았습니다.</div>
        </>
      )}
    </>
  );
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
`;
const StyledLi = styled.li`
  font-size: 14px;
  color: #7d7b7b;
  :nth-of-type(2n) {
    text-align: right;
  }
`;
orderDetailPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default orderDetailPage;
