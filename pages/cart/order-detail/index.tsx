import DefaultLayout from "@/components/layouts/Default";
import { useRouter } from "next/router";

const orderDetailPage = () => {
  const router = useRouter();
  console.log("쿼리확인", router.query);
  return <div>주문내역페이지</div>;
};

orderDetailPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default orderDetailPage;
