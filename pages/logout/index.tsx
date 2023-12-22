import DefaultLayout from "@/components/layouts/Default";
import useContextModal from "@/context/hooks/useContextModal";
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

LogoutPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
