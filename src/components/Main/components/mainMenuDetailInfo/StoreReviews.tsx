import useCart from "@/src/hooks/cart/useCart";
import { useRouter } from "next/router";

export default function StoreReviews() {
  const { reviewInfo } = useCart();
  const router = useRouter();
  const { id } = router.query;
  const { data: reviewInfoData } = reviewInfo(Number(id));

  return (
    <>
      {reviewInfoData?.data && reviewInfoData?.data?.data?.length > 0 ? (
        <div>데이터가 있습니다</div>
      ) : (
        <div>아직 등록된 리뷰가 없습니다.</div>
      )}
    </>
  );
}
