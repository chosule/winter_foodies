import Loading from "@/app/_component/Loading";
import { getStoreReviews } from "../_lib/getStoreReviews";
import Rating from "@/app/_component/Rating";
import { formatDate } from "@/app/(afterLogin)/mypage/review/page";
import Image from "next/image";

type Props = {
  params: {
    storeName: string;
  };
};

export default function StoreReview({ params }: Props) {
  const { storeName } = params;
  const { data } = getStoreReviews(storeName);
  if (data?.reviews.length === 0) {
    return <Loading>{`${storeName}의 리뷰가 아직 없습니다 !`}</Loading>;
  }

  return (
    <div className=" flex flex-col gap-5">
      {data?.reviews.map((review, i) => (
        <div
          key={`리뷰스토어${i}`}
          className="flex flex-col gap-3 bg-color-white rounded-md p-3"
        >
          <div className="flex justify-between">
            <Rating rating={review.rating} />
            <p className="text-xs">{formatDate(review.createdAt)}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
                {review.orderData?.map((order) => (
                  <p className="text-sm" key={order.id}>
                    {order.id}
                  </p>
                ))}
                <p className="text-sm">주문</p>
              </div>
              <p className="font-medium">{review.reviewText}</p>
            </div>
            <Image src={review.imageUrl} alt="이미지" width={50} height={50} />
          </div>
        </div>
      ))}
    </div>
  );
}
