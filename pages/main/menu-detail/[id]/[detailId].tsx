import MenuDetailTab from "@/components/Main/components/mainMenu/MenuDetailTab";
import MenuDetailInfoTab from "@/components/Main/components/mainMenu/MenuDetatilInfoTab";
import DefaultLayout from "@/components/layouts/Default";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import { useRouter } from "next/router";

const MenuDetailInfoPage = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <HeaderLayout headerTitle={name} />
      <MenuDetailInfoTab />
    </>
  );
};

MenuDetailInfoPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default MenuDetailInfoPage;
