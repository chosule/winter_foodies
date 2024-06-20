"use client";
import useSWRMutation from "swr/mutation";

const fetcher = async (url: string, { arg }: { arg: string }) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phoneNumber: arg }),
  });
  if (!res.ok) {
    throw new Error("아이디 찾기 실패");
  }
  return res.json();
};

export default function findId() {
  const { trigger } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_BASE_URL}/find-id`,
    fetcher
  );
  return { trigger };
}
