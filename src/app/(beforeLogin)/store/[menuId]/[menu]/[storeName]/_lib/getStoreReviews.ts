"use client";
import { GetReviews } from "@/app/(afterLogin)/mypage/_model/reviews";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("리뷰 가져오기 실패");
  }
  return res.json();
};

export const getStoreReviews = (storeName: string) => {
  const { data, error } = useSWR<GetReviews>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/reviews/store/${storeName}`,
    fetcher
  );

  return {
    data,
  };
};
