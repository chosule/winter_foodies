import DefaultLayout from "@/components/layouts/Default";

const OrderListPage = () => {
  return(
    <div>주문내역페이지</div>
  )
}

OrderListPage.getLayout = (page: React.ReactNode) => {
    return <DefaultLayout>{page}</DefaultLayout>;
  };

export default OrderListPage;