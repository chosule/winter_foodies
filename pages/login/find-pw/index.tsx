import FindPw from "@/components/Login/FindPw/components";
import LoginLayout from "@/components/layouts/LoginLayout";
const FindPwPage = () => {
  return (
    <>
      <FindPw />
    </>
  );
};

FindPwPage.getLayout = (page: React.ReactNode) => {
  return <LoginLayout>{page}</LoginLayout>;
};
export default FindPwPage;
