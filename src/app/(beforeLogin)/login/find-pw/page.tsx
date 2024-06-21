"use client";
import HeaderLayout from "@/app/_component/HeaderLayout";
import { ChangeEvent, FormEvent, useState } from "react";
import findPw, { Form } from "../_lib/findPw";
import { useRouter } from "next/navigation";
import userDataStore from "@/store/userDataStore";

const FindPwPage = () => {
  const router = useRouter();
  const setUserData = userDataStore((state) => state.setUserData);
  const [formData, setFormData] = useState<Form>({
    name: "",
    phone: "",
    email: "",
  });

  const [error, setError] = useState<string>("");
  const { trigger } = findPw();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await trigger(formData);
      setUserData(res);
      setFormData({ name: "", phone: "", email: "" });
      setError("");
      router.push("/login/success-pw");
    } catch (err: any) {
      if (err?.status === 400) {
        setError("등록된 이메일이 없습니다.");
      } else if (err?.status === 405) {
        setError("등록된 닉네임이 없습니다.");
      } else if (err?.status === 403) {
        setError("등록된 휴대폰 번호가 없습니다.");
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="px-8">
      <HeaderLayout headerTitle="비밀번호 찾기" />
      <form onSubmit={handleSubmit} className="flex flex-col h-[58vh]">
        <div className="flex flex-col grow gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium">가입한 이메일</label>
            <input
              type="text"
              className="rounded-md h-[55px] p-2"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">닉네임</label>
            <input
              type="text"
              className="rounded-md h-[55px] p-2"
              onChange={handleChange}
              name="name"
              value={formData.name}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">휴대폰 번호</label>
            <input
              type="text"
              className="rounded-md h-[55px] p-2"
              onChange={handleChange}
              name="phone"
              value={formData.phone}
            />
          </div>
          <div className="py-2">
            {error && <p className="text-[red]">{error}</p>}
          </div>
        </div>
        <button
          type="submit"
          className="bg-color-orange rounded-md h-[55px] text-color-white font-medium"
        >
          비밀번호 찾기
        </button>
      </form>
    </div>
  );
};

export default FindPwPage;
