import HeaderLayout from "@/components/layouts/HeaderLayout";
import MenuDetailTab from "@/components/Main/components/mainMenu/MenuDetailTab";
import { useQuery } from "@tanstack/react-query";
import { useProjectApi } from "@/context/hooks/useDataContextApi";
import Skeleton from "@/pages/Skeleton/Skeleton";
import NearbyPage from "./menu-detail/Nearby";
import { useRecoilState } from "recoil";
import { nearbyState } from "@/recoil/state";
import { useEffect } from "react";

type dataProps = {
  id: string;
};

const MainMenuDetail = ({ id }: dataProps) => {
  const { client } = useProjectApi();
  const [nearbyDataRecoil, setNearbyDataRecoil] = useRecoilState(nearbyState);

  const { isSuccess, data: nearbyData } = useQuery(["mainPageNearby"], () =>
    client.mainPageNearby(id)
  );

  useEffect(() => {
    if (isSuccess) {
      return setNearbyDataRecoil(nearbyData);
    }
  }, [isSuccess, nearbyData]);

  return (
    <>
      <HeaderLayout headerTitle={id} />
      <MenuDetailTab />
    </>
  );
};

export default MainMenuDetail;
