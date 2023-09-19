import HeaderLayout from "@/components/layouts/HeaderLayout";
import { MainUI } from "../../style";
import MenuDetailTab from "./MenuDetailTab";

type dataProps = {
  id: string;
  imgName: string;
};

const MainMenuDetail = ({ id, imgName }: dataProps) => {
  console.log("test", imgName);
  return (
    <>
      <HeaderLayout headerTitle={imgName} />
      <MainUI.Wrapper>
        <MenuDetailTab />
        <div>{id}</div>
      </MainUI.Wrapper>
    </>
  );
};

export default MainMenuDetail;
