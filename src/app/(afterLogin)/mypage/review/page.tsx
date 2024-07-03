"use client";
import HeaderLayout from "@/app/_component/HeaderLayout";
import { useSession } from "next-auth/react";
import Loading from "@/app/_component/Loading";
import getReviews from "../_lib/getReviews";
import reviewDelete from "../_lib/reviewDelete";
import Image from "next/image";
import Button from "@/app/_component/Button";
import Rating from "@/app/_component/Rating";
import { formatDate } from "../_constant/formatDate";

const ReviewPage = () => {
  const { data: session } = useSession();
  const { data, mutate: reviewMutate } = getReviews(
    session?.user?.id as string
  );

  const { trigger: reviewDeleteTrigger } = reviewDelete();

  if (data?.reviews?.length === 0) {
    return <Loading>아직 작성한 리뷰가 없습니다.</Loading>;
  }
  return (
    <div className="px-8">
      <HeaderLayout headerTitle="리뷰관리" />
      {data?.reviews.map((review) => {
        return (
          <div key={review.id} className="flex gap-[15px] flex-col py-2">
            <div>
              <p className="font-medium">
                {decodeURIComponent(review.storeName)}
              </p>
              <p className="text-[#a9a9a9] text-sm font-medium">
                {formatDate(review.orderCreatedAt)} 주문
              </p>
            </div>
            <div className="w-full h-full bg-color-white rounded-md p-3 flex flex-col gap-3">
              <div className="flex justify-between">
                <div className="items-center flex gap-[10px]">
                  <Rating rating={review.rating} />
                  <p className="text-xs">{formatDate(review.createdAt)} 작성</p>
                </div>
                <Button
                  onClickHandler={async () => {
                    await reviewDeleteTrigger({
                      userId: session?.user?.id,
                      storeName: review.storeName,
                    });
                    await reviewMutate();
                  }}
                >
                  <p className="text-[#a9a9a9] text-xs">삭제</p>
                </Button>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-1">
                    {review.orderData?.map((orderlist, i) => (
                      <p
                        key={`주문내역${i}`}
                        className="text-sm text-[#929494]"
                      >
                        {orderlist.id}
                      </p>
                    ))}
                    <p className="text-sm text-[#929494]">주문</p>
                  </div>
                  <p className="text-md font-medium">{review.reviewText}</p>
                </div>
                <div>
                  <Image
                    className="rounded-md"
                    src={review.imageUrl}
                    alt="주문이미지"
                    width={45}
                    height={45}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewPage;
