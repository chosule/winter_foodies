"use client";
import useSWRMutation from "swr/mutation";

const fetcher = async (url: string, { arg }: { arg: any }) => {
  const res = await fetch(url, {
    method: "POST",
    body: arg,
  });
  if (!res.ok) {
    throw new Error("리뷰등록 실패");
  }
  return res.json();
};
export default function review() {
  const { trigger } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_BASE_URL}/review`,
    fetcher
  );
  return { trigger };
}
