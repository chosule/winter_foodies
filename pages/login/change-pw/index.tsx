import ChangePassword from "@/components/Login/ChangePw/components";
import DefaultLayout from "@/components/layouts/Default";
import LoginLayout from "@/components/layouts/LoginLayout";

const ChangePwPage = () => {
  return (
    <>
      <ChangePassword />
    </>
  );
};
ChangePwPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default ChangePwPage;
