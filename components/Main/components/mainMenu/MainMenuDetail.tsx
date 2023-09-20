import HeaderLayout from "@/components/layouts/HeaderLayout";
import { MainUI } from "../../style";
import MenuDetailTab from "./MenuDetailTab";
import { useQuery } from "@tanstack/react-query";
import FakeWinterFoodClient from "@/types/api/FakeWinterFoodClient";

type dataProps = {
  id: string;
  imgName: string;
};

const MainMenuDetail = ({ id, imgName }: dataProps) => {
  const {
    isLoading,
    error,
    data: menudetails,
  } = useQuery(["menudetails"], async () => {
    const menuDetailApi = new FakeWinterFoodClient();
    const response = await menuDetailApi.menuDetail();
    return response.data; // 실제 데이터를 반환
  });
  console.log("data 나오는지 test => ", menudetails);
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
