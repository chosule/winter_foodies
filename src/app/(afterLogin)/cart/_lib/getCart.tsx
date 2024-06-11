"use client";
import useSWR from "swr";
import { GetCart } from "../_model/cart";
import { useSession } from "next-auth/react";

const fetcher = (url: string, userId: string) =>
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      userId,
    },
  }).then((res) => res.json());

export default function getCart() {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const { data, isLoading } = useSWR<GetCart>(
    [`${process.env.NEXT_PUBLIC_BASE_URL}/cart`, userId],
    ([url, userId]) => fetcher(url, userId as string)
  );
  return { data, isLoading };
}
