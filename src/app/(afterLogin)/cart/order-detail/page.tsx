"use client";
import { Button } from "@/src/components/ui/Button";
import CommonBox from "@/src/components/ui/Box";
import useContextModal from "@/src/context/hooks/useContextModal";
import useCart from "@/src/hooks/cart/useCart";
import { orderResultDataState } from "@/src/recoil/atom";
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
          <div className="flex flex-col justify-center gap-[56px]">
            <div className="flex flex-col items-center gap-[20px]">
              <IoCheckmarkCircleOutline className="text-[52px]" />
              <div>
                <p className="text-center text-[20px] font-[600]">
                  주문이 완료되었습니다!
                </p>
                <p className="text-center text-15px">{`예상 조리시간에 맞춰 \n 방문하시는것을 추천드립니다.`}</p>
              </div>
            </div>
            <CommonBox width="100%" height="100%" bg="#f3f3f3">
              <div className="flex flex-col p-[20px] gap-[20px]">
                <p className="text-center">주문내역</p>
                <ul className="order-ul">
                  <li>주문일자</li>
                  <li>{orderResultState.orderTime}</li>
                  <li>상호명</li>
                  <li>{orderResultState.storeName}</li>
                  <li>예상조리시간</li>
                  <li>10분 - 20분</li>
                </ul>
                {/*  */}
                <ul className="order-ul">
                  <li>어묵 4개</li>
                  <li>2000원</li>
                  <li>붕어빵 4개</li>
                  <li>2800원</li>
                </ul>
                {/*  */}
                <ul className="order-ul">
                  <li>결제금액</li>
                  <li>{orderResultState.totalPrice}</li>
                </ul>
              </div>
            </CommonBox>
            <div>
              <Button width="100%" onClick={completeOrder}>
                확인완료
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>주문이 정상적으로 이루어지지않았습니다.</div>
        </>
      )}
    </>
  );
};

export default orderDetailPage;
