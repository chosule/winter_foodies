import FindId from "@/components/Login/FindId/components/index";
import DefaultLayout from "@/components/layouts/Default";
import LoginLayout from "@/components/layouts/LoginLayout";

const FindIdPage = () => {
  return (
    <>
      <FindId />
    </>
  );
};
FindIdPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default FindIdPage;
