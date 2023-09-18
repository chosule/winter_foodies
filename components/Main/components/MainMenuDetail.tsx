import { getMenuDetailAPI } from "@/lib/api/menuDetail";

type dataProps = {
  id: string;
};
const MainMenuDetail = ({ id }: dataProps) => {
  //   const menuData = useMenuDetail();
  console.log("menuData", getMenuDetailAPI());
  const fetchMenuDetail = async () => {
    try {
      const response = await getMenuDetailAPI();
      console.log("menuData", response.data);
    } catch (error) {
      console.error("Error fetching menu detail:", error);
    }
  };
  return (
    <>
      <div>메뉴디테일 페이지</div>
      <div>{id}</div>
    </>
  );
};

export default MainMenuDetail;
