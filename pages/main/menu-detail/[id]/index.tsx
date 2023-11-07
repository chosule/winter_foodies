import DefaultLayout from "@/components/layouts/Default";
import { useRouter } from "next/router";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import MenuDetailTab from "@/components/Main/components/mainMenu/MenuDetailTab";

const MenuDetail = () => {
  const router = useRouter();
  const { imgName } = router.query;

  return (
    <>
      <HeaderLayout headerTitle={imgName} />
      <MenuDetailTab />
    </>
  );
};

MenuDetail.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default MenuDetail;