import ChangePassword from "@/components/Login/ChangePw/components";
import LoginLayout from "@/components/layouts/LoginLayout";

const ChangePwPage = () => {
  return (
    <>
      <ChangePassword />
    </>
  );
};
ChangePwPage.getLayout = (page: React.ReactNode) => {
  return <LoginLayout>{page}</LoginLayout>;
};
export default ChangePwPage;
