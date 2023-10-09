import HeaderLayout from "@/components/layouts/HeaderLayout";
import { MainUI } from "../../style";
import MenuDetailTab from "./MenuDetailTab";
import { useQuery } from "@tanstack/react-query";
import { useProjectApi } from "@/context/hooks/useDataContextApi";
import Skeleton from "@/pages/Skeleton/Skeleton";

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
      {isLoading ? (
        <Skeleton></Skeleton>
      ) : (
        <>
          <HeaderLayout headerTitle={imgName} />
          <MainUI.Wrapper>
            <MenuDetailTab />
            <div>{id}</div>
          </MainUI.Wrapper>
        </>
      )}
    </>
  );
};

export default MainMenuDetail;
