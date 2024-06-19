"use client";
import HeaderLayout from "@/app/_component/HeaderLayout";
import { useSession } from "next-auth/react";
import Image from "next/image";
import getOrderLists from "../_lib/getOrderLists";
import logo from "../../../../../public/img/mainLogoIcon.png";

const OrderListPage = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const { data } = getOrderLists(userId as string);
  return (
    <div className="px-8">
      <HeaderLayout headerTitle="주문내역" />
      <div className="flex flex-col gap-[30px]">
        {data?.orders?.map((item, i) => {
          const totalPrice = item.data.reduce(
            (acc, cur) => acc + cur.totalPrice,
            0
          );

          return (
            <div
              key={`주문내열${i}`}
              className="bg-white rounded-md p-4 flex flex-col gap-6"
            >
              <div className="flex gap-2">
                <div className="flex gap-[10px] w-[60px] h-[60px]">
                  <Image
                    className="rounded-[13px]"
                    src={logo}
                    alt="이미지"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex gap-[6px] flex-col">
                  <p className="font-[600] text-[17px]">{item.store}</p>
                  <p className="font-[600] text-[13px]">{item.createAt}</p>
                  <div className="flex gap-2 ">
                    {data?.orders[i].data?.map((data, i) => (
                      <div key={`주문내역${i}`} className="flex gap-1 text-sm">
                        <div>{data.id}</div>
                        <div>{data.quantity}개</div>
                        <div>{data.totalPrice}</div>
                      </div>
                    ))}
                  </div>
                  <p className="font-medium">{totalPrice}원</p>
                </div>
              </div>
              <button className="w-full border rounded-md border-color-orange py-3">
                <p className="text-color-orange font-medium">리뷰 작성하기</p>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderListPage;
