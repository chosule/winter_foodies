import DefaultLayout from "@/components/layouts/Default";
import Login from "@/components/Login/components/index";

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

LoginPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default LoginPage;
