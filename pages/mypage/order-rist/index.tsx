import DefaultLayout from "@/components/layouts/Default";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import CommonBox from "@/components/ui/CommonBox/CommonBox";
import useCart from "@/hooks/cart/useCart";

const OrderListPage = () => {
  
  const {orderDetailsApi:{ isSuccess, data : orderDatas}} = useCart();
  
  console.log('주문내역 api', orderDatas)
  return(
    <>
        <HeaderLayout headerTitle="주문내역" />

        {orderDatas ? (
          <ul>
            {orderDatas?.data?.map(({storeImage,id,}) => (
              <li key={id}>
                Image
                <CommonBox width="100%" backgroundcolor="#ededed">          
                </CommonBox>
              </li>

            ))}

          </ul>
          
          ): (<div>ddff</div>)}
        
        
    </>
      )
    }

OrderListPage.getLayout = (page: React.ReactNode) => {
    return <DefaultLayout>{page}</DefaultLayout>;
  };

export default OrderListPage;