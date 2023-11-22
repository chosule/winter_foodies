import MenuSearch from "@/components/Main/components/MenuSearch";
import MyLocation from "@/components/Main/components/MyLocation";
import NearDistance from "@/components/Main/components/NearDistance";
import RearTimeSearchWords from "@/components/Main/components/RearTimeSearchWords";
import MainMenu from "@/components/Main/components/mainMenu/MainMenu";
import DefaultLayout from "@/components/layouts/Default";

const MainPage = () => {
  return (
    <>
      <MyLocation />
      <MenuSearch />
      <RearTimeSearchWords />
      <MainMenu />
      <NearDistance />
    </>
  );
};

MainPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default MainPage;
