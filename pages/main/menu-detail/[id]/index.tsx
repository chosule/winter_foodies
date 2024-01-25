import DefaultLayout from "@/components/layouts/Default";
import { useRouter } from "next/router";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import MenuDetailTab from "@/components/Main/components/mainMenu/MenuDetailTab";
import { nearbyDataState } from "@/recoil/atom";
import { useRecoilValue } from "recoil";

export function MenuDetailPage() {
  const router = useRouter();
  const { imgName } = router.query;
  console.log('router?',router.query)
  const data = useRecoilValue(nearbyDataState);
  return (
    <>
      <HeaderLayout headerTitle={`${data?.status}`} />
      <MenuDetailTab />
    </>
  );
}

MenuDetailPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default MenuDetailPage;
