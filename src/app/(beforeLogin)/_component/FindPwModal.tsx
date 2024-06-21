"use client";

import userDataStore from "@/store/userDataStore";

export default function FindPwModal() {
  const data = userDataStore((state) => state.userData);
  const { info } = data;
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full">
      <div className="font-medium whitespace-pre-line text-center">
        <p>회원님의 비밀번호는</p>
        {info?.map((item, i) => (
          <span key={`item${i}`} className="text-color-orange">
            {item.password}
          </span>
        ))}
        <span> 입니다.</span>
      </div>
    </div>
  );
}
