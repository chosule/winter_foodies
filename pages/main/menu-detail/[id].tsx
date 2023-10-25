import DefaultLayout from "@/components/layouts/Default";
import { useRouter } from "next/router";
import MainMenuDetail from "@/pages/main/MainMenuDetail";
import TabLayout from "@/components/layouts/TabLayout";
import { useState } from "react";

const MenuDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <MainMenuDetail id={id as string} />
    </>
  );
};

MenuDetail.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default MenuDetail;
