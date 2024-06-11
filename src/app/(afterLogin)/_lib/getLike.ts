"use client";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { GetLike } from "../_model/like";

const fetcher = (url: string, userId: string) =>
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      userId: userId,
    },
  }).then((res) => res.json());

export default function getLike() {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const { data, isLoading, mutate } = useSWR<GetLike>(
    [`${process.env.NEXT_PUBLIC_BASE_URL}/like`, userId],
    ([url, userId]) => fetcher(url, userId as string)
  );
  return { data, isLoading, mutate };
}
