"use client";
import useSWR from "swr";
import { GetOrder } from "../_model/orderList";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function getOrder() {
  const { data } = useSWR<GetOrder>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/order`,
    fetcher
  );
  return { data };
}
