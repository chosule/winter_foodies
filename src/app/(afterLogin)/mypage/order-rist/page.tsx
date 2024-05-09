"use client";
import HeaderLayout from "@/src/components/layouts/HeaderLayout";
import useCart from "@/src/hooks/cart/useCart";
import Image from "next/image";
import useDateFormat from "@/src/hooks/useDateFormat";
import StarRating from "@/src/components/ui/StarRating";
import Skeleton from "@/src/components/Skeleton/Skeleton";
import { Button } from "@/src/components/ui/Button";
import useContextModal from "@/src/context/hooks/useContextModal";

const OrderListPage = () => {
  const modal = useContextModal();

  const {
    orderDetailsApi: { isLoading, data: orderDatas, isSuccess },
  } = useCart();

  if (isLoading) return <Skeleton />;

  const openReview = (storeName: string, id: number) => {
    modal.openReviewRegist({
      storeName: `${storeName}`,
      id: id,
    });
  };

  return (
    <>
      <HeaderLayout headerTitle="주문내역" />
      {orderDatas && orderDatas.data.length > 0 ? (
        <div className="flex flex-col gap-[30px]">
          {orderDatas && (
            <>
              {orderDatas?.data?.map(
                ({
                  storeImage,
                  id,
                  storeName,
                  storeRating,
                  orderTime,
                  items,
                  totalPrice,
                }) => (
                  <div className="w-hull bg-white h-full" key={id}>
                    <div className="flex gap-[10px]">
                      <Image
                        className="rounded-[13px]"
                        src={storeImage}
                        alt="이미지"
                        width={60}
                        height={60}
                      />
                      <div className="flex gap-[6px] flex-col">
                        <div className="gap-[10px] items-center">
                          <p className="font-[600] text-[13px]">{storeName}</p>
                          <StarRating storeRating={`${storeRating}`} />
                        </div>
                        <p>{useDateFormat(orderTime)}</p>
                        <div className="flex gap-[10px]">
                          {items.map((item, index) => (
                            <div className="flex gap-[5px]" key={index}>
                              <p>{item.itemName}</p>
                              <p>{item.quantity}개</p>
                            </div>
                          ))}
                        </div>
                        <p>{totalPrice} 원</p>
                      </div>
                    </div>
                    <Button width="100%">
                      <p onClick={() => openReview(storeName, id)}>
                        리뷰 작성하기
                      </p>
                    </Button>
                  </div>
                )
              )}
            </>
          )}
        </div>
      ) : (
        <div>데이터 없슴</div>
      )}
    </>
  );
};

export default OrderListPage;
