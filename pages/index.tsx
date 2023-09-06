import { NextPageWithLayout } from "@/types/commons";
import Main from "@/components/Main/components/index";
import DefaultLayout from "@/components/layouts/Default";

const PageIndex: NextPageWithLayout<{}> = () => <Main />;

PageIndex.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export default PageIndex;
