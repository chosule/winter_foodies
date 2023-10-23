import DefaultLayout from "@/components/layouts/Default";
import { useRouter } from "next/router";
import MainMenuDetail from "@/pages/main/MainMenuDetail";
import TabLayout from "@/components/layouts/TabLayout";

const MenuDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <MainMenuDetail id={id as string} />
      {/* <TabLayout /> */}
    </>
  );
};

MenuDetail.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default MenuDetail;
