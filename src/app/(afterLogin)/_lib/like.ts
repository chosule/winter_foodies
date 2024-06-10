"use client";
import useSWRMutation from "swr/mutation";

const fetcher = async (url: string, { arg }: { arg: any }) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });
  if (!res.ok) {
    throw new Error("좋아요 실패");
  }
  return res.json();
};
export default function like() {
  const { trigger } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_BASE_URL}/like`,
    fetcher
  );
  return { trigger };
}
