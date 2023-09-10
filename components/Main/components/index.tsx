import { MainUI } from "../style";
import RearTimeSearchWords from "./RearTimeSearchWords";
import MainMenu from "./MainMenu";
import NearDistance from "./NearDistance";
import MenuSearch from "./MenuSearch";

const Main = () => {
  return (
    <>
      <MainUI.Text>현재 위치 영역</MainUI.Text>
      <MenuSearch />
      <RearTimeSearchWords />
      <MainMenu />
      <NearDistance />
    </>
  );
};

export default Main;
