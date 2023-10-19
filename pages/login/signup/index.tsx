import DefaultLayout from "@/components/layouts/Default";
import LoginLayout from "@/components/layouts/LoginLayout";
import SignUp from "@/components/Login/Signup/components";
const SignUpPage = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

SignUpPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default SignUpPage;
