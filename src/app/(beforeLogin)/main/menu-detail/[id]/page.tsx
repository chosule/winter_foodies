import DefaultLayout from "@/src/components/layouts/Default";
import { useRouter } from "next/router";
import HeaderLayout from "@/src/components/layouts/HeaderLayout";
import MenuDetailTab from "@/src/components/Main/components/mainMenu/MenuDetailTab";
import { nearbyDataState } from "@/src/recoil/atom";
import { useRecoilValue } from "recoil";

export function MenuDetailPage() {
  const data = useRecoilValue(nearbyDataState);
  return (
    <>
      <HeaderLayout headerTitle={`${data?.status}`} />
      <MenuDetailTab />
    </>
  );
}

export default MenuDetailPage;
