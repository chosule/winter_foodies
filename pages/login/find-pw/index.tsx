import FindPw from "@/components/Login/FindPw/components/index";
import DefaultLayout from "@/components/layouts/Default";
import LoginLayout from "@/components/layouts/LoginLayout";

const FindPwPage = () => {
  return (
    <>
      <FindPw />
    </>
  );
};

FindPwPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default FindPwPage;
