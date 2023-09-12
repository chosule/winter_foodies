import FindId from "@/components/Login/FindId/components/index";
import LoginLayout from "@/components/layouts/LoginLayout";

const FindIdPage = () => {
  return (
    <>
      <FindId />
    </>
  );
};
FindIdPage.getLayout = (page: React.ReactNode) => {
  return <LoginLayout>{page}</LoginLayout>;
};
export default FindIdPage;
