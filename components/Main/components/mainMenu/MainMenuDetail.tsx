import HeaderLayout from "@/components/layouts/HeaderLayout";
import { MainUI } from "../../style";
import MenuDetailTab from "./MenuDetailTab";
import { useQuery } from "@tanstack/react-query";
import FakeWinterFoodClient from "@/types/api/FakeWinterFoodClient";
import menuDetailData from "@/types/api/FakeWinterFoodClient";
type dataProps = {
  id: string;
  imgName: string;
};

const MainMenuDetail = ({ id, imgName }: dataProps) => {
  const { isLoading, error, data } = useQuery(["menudetails"], () => {
    const test = new FakeWinterFoodClient();
    return test.menuDetail();
  });
  console.log("data 나오는지 test => ", data);
  return (
    <>
      {isLoading && <div>로딩중...</div>}
      <HeaderLayout headerTitle={imgName} />
      <MainUI.Wrapper>
        <MenuDetailTab />
        <div>{id}</div>
      </MainUI.Wrapper>
    </>
  );
};

export default MainMenuDetail;
