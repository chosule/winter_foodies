"use client";
import DefaultLayout from "@/src/components/layouts/Default";
import useContextModal from "@/src/context/hooks/useContextModal";
import { useEffect } from "react";

export default function LogoutPage() {
  const modal = useContextModal();

  const openLogoutModal = () => {
    modal.logoutModal({
      message: "로그아웃 하시겠습니까?",
    });
  };

  useEffect(() => {
    openLogoutModal();
  }, []);
  return <></>;
}
