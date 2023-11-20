import MenuDetailInfoTab from "@/components/Main/components/mainMenu/MenuDetatilInfoTab";
import DefaultLayout from "@/components/layouts/Default";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import Image from "next/image";
import { useRouter } from "next/router";

const MenuDetailInfoPage = () => {
  const router = useRouter();
  const { name, picture } = router.query;

  return (
    <>
      <HeaderLayout headerTitle={name} />
      <Image src={picture} alt="이미지" width={70} height={70} />
      <MenuDetailInfoTab />
    </>
  );
};

MenuDetailInfoPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default MenuDetailInfoPage;
