import DefaultLayout from "@/components/layouts/Default";

const MypageInfoPage = () => {
  return <div>마이인포페이지</div>;
};
export default MypageInfoPage;

MypageInfoPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
