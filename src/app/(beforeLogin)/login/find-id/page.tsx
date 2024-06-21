"use client";

import HeaderLayout from "@/app/_component/HeaderLayout";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import findId from "../_lib/findId";
import { useRouter } from "next/navigation";

export type Form = {
  phoneNumber: string;
  authCode: string;
};

const FindIdPage = () => {
  const { trigger } = findId();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await trigger(phoneNumber);
      setPhoneNumber("");
      const userId = res.ids.join("");
      router.push(`/login/success-id/${userId}`);
      setError(false);
    } catch (err) {
      setError(true);
      console.log("아이디찾기 err", err);
    }
  };
  return (
    <div className="px-8">
      <HeaderLayout headerTitle="아이디찾기" />
      <form onSubmit={handleSubmit} className="flex flex-col h-[30vh]">
        <div className="flex flex-col grow gap-4">
          <p className="font-medium">등록된 휴대폰 번호로 찾기</p>
          <input
            type="text"
            className="rounded-md h-[55px] p-2"
            onChange={handleChange}
            value={phoneNumber}
          />
          {error && (
            <div className="text-[red]">등록된 휴대폰 번호가 없습니다.</div>
          )}
        </div>
        <button
          type="submit"
          className="bg-color-orange rounded-md h-[55px] text-color-white font-medium"
        >
          아이디 찾기
        </button>
      </form>
    </div>
  );
};

export default FindIdPage;
