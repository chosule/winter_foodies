import HeaderLayout from "@/components/layouts/HeaderLayout";
import { MainUI } from "../../style";
import MenuDetailTab from "./MenuDetailTab";
import { useQuery } from "@tanstack/react-query";
import { useProjectApi } from "@/context/hooks/useDataContextApi";
import Skeleton from "@/pages/Skeleton/Skeleton";
import { useEffect, useState } from "react";

type dataProps = {
  id: string;
  imgName: string;
};

const MainMenuDetail = ({ id, imgName }: dataProps) => {
  const { client } = useProjectApi();
  const [menuDetails, setMenuDetails] = useState([]);

  const { isLoading, error, data } = useQuery(["mainPageNearby"], () =>
    client.mainPageNearby(id)
  );

  useEffect(() => {
    if (data) {
      setMenuDetails(data);
    }
  }, [data]);

  console.log("menudetail결과", menuDetails);
  return (
    <>
      {/* {isLoading ? (
        <Skeleton></Skeleton>
      ) : ( */}
      <>
        {menuDetails.map((menuDetail) => (
          <>
            <HeaderLayout headerTitle={menuDetail.category} />
            <MainUI.Wrapper>
              <MenuDetailTab />
              <div>{id}</div>
            </MainUI.Wrapper>
          </>
        ))}
      </>
      {/* )} */}
    </>
  );
};

export default MainMenuDetail;
