import Main from "@/components/Main/components";
import { PageLayout } from "@/components/layouts/BottomNavigation/index";

const MainPage = () => {
  return (
    <>
      <Main />
    </>
  );
};

MainPage.getLayout = (page: React.ReactNode) => {
  return <PageLayout>{page}</PageLayout>;
};

export default MainPage;
