import useUserAuth from "@/src/hooks/auth/useUserAuth";
import { ModalUI } from "./style";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ModalPropsPartial } from "@/src/utils/modal";
import Button from "../ui/Button";

type ModalProps = {
  message?: string;
  close?: () => void;
};

export default function LogoutModal({ close, message }: ModalProps) {
  const router = useRouter();
  const { logout } = useUserAuth();

  useEffect(() => {
    router.push("/");
  }, [logout]);
  return (
    <>
      <div className="modal-overlay" />
      <div className="modal-content">
        <div>로그아웃</div>
        <div></div>
        <div className="text-[#353535] font-[300] text-ceter text-[13px] whitespace-pre-line">
          {message}
        </div>
        <div className="flex gap-[10px]" onClick={close}>
          <Button height="36px" bg="#dd8027" className="" onClick={logout}>
            <p>예</p>
          </Button>
          <Button height="36px">
            <p>아니요</p>
          </Button>
        </div>
      </div>
    </>
  );
}
