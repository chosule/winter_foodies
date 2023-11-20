import { MainUI } from "../style";
import RearTimeSearchWords from "./RearTimeSearchWords";
import MainMenu from "./mainMenu/MainMenu";
import NearDistance from "./NearDistance";
import MenuSearch from "./MenuSearch";
import MyLocation from "./MyLocation";

const Main = () => {
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

export default Main;
