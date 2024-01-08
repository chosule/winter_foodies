import DefaultLayout from "@/components/layouts/Default";
import { useRouter } from "next/router";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import MenuDetailTab from "@/components/Main/components/mainMenu/MenuDetailTab";

export function MenuDetailPage() {
  const router = useRouter();
  const { imgName } = router.query;
  console.log('router ddd',router.query.id)
  return (
    <>
      <HeaderLayout headerTitle={`${imgName}`} />
      <MenuDetailTab />
    </>
  );
}

MenuDetailPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default MenuDetailPage;
