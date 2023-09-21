import HeaderLayout from "@/components/layouts/HeaderLayout";
import { MainUI } from "../../style";
import MenuDetailTab from "./MenuDetailTab";
import { useQuery } from "@tanstack/react-query";
import FakeWinterFoodClient from "@/types/api/fakeWinterFoodClient";
import menuDetailData from "@/types/api/fakeWinterFoodClient";
import { useProjectApi } from "@/context/dataApiContext";

type dataProps = {
  id: string;
  imgName: string;
};

const MainMenuDetail = ({ id, imgName }: dataProps) => {
  const { client } = useProjectApi();
  const { isLoading, error, data } = useQuery(["menuDetails"], () =>
    client.menuDetail()
  );
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
