"use client";
import { useRouter } from "next/navigation";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import getOrder from "./_lib/getOrder";

const orderDetailPage = () => {
  const router = useRouter();
  const { data } = getOrder();
  const totalPrice = data?.data.reduce((acc, item) => acc + item.totalPrice, 0);

  console.log("data?", data);
  return (
    <div className="flex flex-col justify-center gap-[56px] px-8">
      <div className="flex flex-col items-center gap-[20px]">
        <IoCheckmarkCircleOutline className="text-[52px] text-color-orange" />
        <div>
          <p className="text-center text-[20px] font-[600]">
            주문이 완료되었습니다!
          </p>
          <p className="text-center text-15px">{`예상 조리시간에 맞춰 \n 방문하시는것을 추천드립니다.`}</p>
        </div>
      </div>
      <div className="flex flex-col p-[20px] bg-color-white rounded-md">
        <p className="font-medium text-[17px]">주문내역</p>
        <ul className="grid grid-cols-2 gap-1 border-t py-[20px]">
          <li>주문일자</li>
          <li>12.33</li>
          <li>상호명</li>
          <li>{data?.store}</li>
          <li>예상조리시간</li>
          <li>10분 - 20분</li>
        </ul>
        {/*  */}
        <div className="border-t py-[20px]">
          {data?.data.map((list, i) => (
            <ul key={`order${i}`} className="grid grid-cols-2 gap-1 ">
              <li>{list.id}</li>
              <li>{list.price}원</li>
            </ul>
          ))}
        </div>
        {/*  */}
        <ul className="grid grid-cols-2 gap-1 border-t pt-[20px]">
          <li>결제금액</li>
          <li>총 {totalPrice}원</li>
        </ul>
      </div>
      <button
        onClick={() => router.push("/")}
        className="bg-color-orange py-3 rounded-md text-color-white font-medium"
      >
        확인완료
      </button>
    </div>
  );
};

export default orderDetailPage;
