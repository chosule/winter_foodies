"use client";
import HeaderLayout from "@/src/app/_component/HeaderLayout";
import Image from "next/image";

const OrderListPage = () => {
  return (
    <>
      <HeaderLayout headerTitle="주문내역" />
      <div className="flex flex-col gap-[30px]">
        <div className="w-hull bg-white h-full">
          <div className="flex gap-[10px]">
            {/* <Image
                        className="rounded-[13px]"
                        src={storeImage}
                        alt="이미지"
                        width={60}
                        height={60}
                      /> */}
            <div className="flex gap-[6px] flex-col">
              <div className="gap-[10px] items-center">
                <p className="font-[600] text-[13px]">가게이름</p>
                {/* <StarRating storeRating={`${storeRating}`} /> */}
              </div>
              {/* <p>{useDateFormat(orderTime)}</p> */}
              <div className="flex gap-[10px]">
                <div className="flex gap-[5px]">
                  {/* <p>{item.itemName}</p> */}
                  {/* <p>{item.quantity}개</p> */}
                </div>
              </div>
              <p>가격표시 원</p>
            </div>
          </div>
          <button className="w-full">
            <p>리뷰 작성하기</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderListPage;
