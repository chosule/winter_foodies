import HeaderLayout from "@/components/layouts/HeaderLayout";
import MenuDetailTab from "@/components/Main/components/mainMenu/MenuDetailTab";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { menuId } from "@/recoil/atom";

type dataProps = {
  id: number;
};

const MainMenuDetail = ({ id }: dataProps) => {
  const [menuIdRecoil, setMenuIdRecoil] = useRecoilState(menuId);

  useEffect(() => {
    if (id) {
      setMenuIdRecoil(id);
    }
  }, [id]);

  return (
    <>
      <HeaderLayout />
      <MenuDetailTab />
    </>
  );
};

export default MainMenuDetail;
