import HeaderLayout from "@/components/layouts/HeaderLayout";
import MenuDetailTab from "@/components/Main/components/mainMenu/MenuDetailTab";
import { useQuery } from "@tanstack/react-query";
import { useProjectApi } from "@/context/hooks/useDataContextApi";
import Skeleton from "@/pages/Skeleton/Skeleton";
import NearbyPage from "./menu-detail/Nearby";
import { useRecoilState } from "recoil";
import { nearbyState } from "@/recoil/state";
import { useEffect } from "react";
import useProduct from "@/hooks/propduct/useProduct";
import { menuId } from "@/recoil/state";
type dataProps = {
  id: string;
};

const MainMenuDetail = ({ id }: dataProps) => {
  const { client } = useProjectApi();
  const { nearbyApi } = useProduct();
  const [nearbyDataRecoil, setNearbyDataRecoil] = useRecoilState(nearbyState);
  const [menuIdRecoil, setMenuIdRecoil] = useRecoilState(menuId);

  useEffect(() => {
    if (id) {
      setMenuIdRecoil(id);
    }
  }, [id]);

  return (
    <>
      <HeaderLayout headerTitle={id} />
      <MenuDetailTab />
    </>
  );
};

export default MainMenuDetail;
