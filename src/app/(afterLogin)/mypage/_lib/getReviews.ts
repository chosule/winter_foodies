"use client";
import useSWR from "swr";
import { GetReviews } from "../_model/reviews";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function getReviews(userId: string) {
  const { data, mutate } = useSWR<GetReviews>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/reviews/${userId}`,
    fetcher
  );
  return { data, mutate };
}
