"use client";
import useSWRMutation from "swr/mutation";

export type Form = {
  name: string;
  phone: string;
  email: string;
};
const fetcher = async (url: string, { arg }: { arg: Form }) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw { status: res.status, message: errorData.error };
  }
  return res.json();
};

export default function findPw() {
  const { trigger } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_BASE_URL}/find-pw`,
    fetcher
  );
  return { trigger };
}
