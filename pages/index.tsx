import { NextPageWithLayout } from "@/types/commons";
import DefaultLayout from "@/components/layouts/Default";
import MainPage from "@/pages/main";

const PageIndex: NextPageWithLayout<{}> = () => <MainPage />;

PageIndex.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export default PageIndex;
