import MenuSearch from "@/src/app/(beforeLogin)/_component/MenuSearch";
import MyLocation from "@/src/app/(beforeLogin)/_component/MyLocation";
import NearDistance from "@/src/app/(beforeLogin)/_component/NearDistance";
import RearTimeSearchWords from "@/src/app/(beforeLogin)/_component/RearTimeSearchWords";
import MainMenu from "@/src/components/Main/components/mainMenu/MainMenu";
import DefaultLayout from "@/src/components/layouts/Default";

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

export default MainPage;
