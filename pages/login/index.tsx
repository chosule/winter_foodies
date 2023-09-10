import LoginLayout from "@/components/layouts/LoginLayout";
import Login from "@/components/login/components/index";

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

LoginPage.getLayout = (page: React.ReactNode) => {
  return <LoginLayout>{page}</LoginLayout>;
};

export default LoginPage;
