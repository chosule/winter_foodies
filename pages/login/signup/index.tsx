import HeaderLayout from "@/components/layouts/HeaderLayout";
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
  return <LoginLayout>{page}</LoginLayout>;
};

export default SignUpPage;
