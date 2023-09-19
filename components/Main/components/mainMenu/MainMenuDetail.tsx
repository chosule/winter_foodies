import HeaderLayout from "@/components/layouts/HeaderLayout";
import { MainUI } from "../../style";
import MenuDetailTab from "./MenuDetailTab";
import { useQuery } from "@tanstack/react-query";
import mainMenuDetailApi from "@/components/Main/hooks/useMainMenuDetail";
type dataProps = {
  id: string;
  imgName: string;
};

const MainMenuDetail = ({ id, imgName }: dataProps) => {
  // console.log("test", imgName);
  const { data, isLoading, error } = useQuery({
    queryKey: ["mainMenuDetail"],
    queryFn: mainMenuDetailApi,
  });
  if (isLoading || !data) return <div>is Loading...</div>;
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
