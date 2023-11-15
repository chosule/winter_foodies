import DefaultLayout from "@/components/layouts/Default";

const orderDetailPage = () => {
  return <div>주문내역페이지</div>;
};

orderDetailPage.getLayout = (page: React.ReactNode) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default orderDetailPage;
