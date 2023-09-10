import Main from "@/components/Main/components";
import DefaultLayout from "@/components/layouts/Default";

const MainPage = () => {
  return (
    <>
      <Main />
    </>
  );
};

MainPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default MainPage;
