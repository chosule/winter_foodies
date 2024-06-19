"use client";
import useSWR from "swr";
import { GetOrders } from "../_model/orderLists";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function getOrderLists(userId: string) {
  const { data, isLoading } = useSWR<GetOrders>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/orders/${userId}`,
    fetcher
  );
  return { data, isLoading };
}
