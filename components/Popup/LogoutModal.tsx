import useUserAuth from "@/hooks/auth/useUserAuth";
import { ModalUI } from "./style";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ModalProps } from "@/context/types/modalProps";


export default function LogoutModal({ close, title, btnText, message }:ModalProps) {
  const router = useRouter();
  const { logout } = useUserAuth();

  useEffect(() => {
    router.push("/");
  }, [logout]);
  return (
    <>
      <ModalUI.Overlay />
      <ModalUI.Content>
        <ModalUI.Title color="#000">로그아웃</ModalUI.Title>
        <ModalUI.Title></ModalUI.Title>
        <ModalUI.Message>{message}</ModalUI.Message>
        <ModalUI.Flex gap="10px" onClick={close}>
          <ModalUI.ConfirmBtn onClick={logout}>
            <ModalUI.Title>예</ModalUI.Title>
          </ModalUI.ConfirmBtn>
          <ModalUI.ConfirmBtn>
            <ModalUI.Title>아니요</ModalUI.Title>
          </ModalUI.ConfirmBtn>
        </ModalUI.Flex>
      </ModalUI.Content>
    </>
  );
}
