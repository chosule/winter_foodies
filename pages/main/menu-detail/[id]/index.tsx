import DefaultLayout from "@/components/layouts/Default";
import { useRouter } from "next/router";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import MenuDetailTab from "@/components/Main/components/mainMenu/MenuDetailTab";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { useProjectApi } from "@/context/hooks/useDataContextApi";

export function MenuDetailPage() {
  const router = useRouter();
  const { imgName } = router.query;
  return (
    <>
      <HeaderLayout headerTitle={imgName} />
      <MenuDetailTab />
    </>
  );
}

MenuDetailPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default MenuDetailPage;
