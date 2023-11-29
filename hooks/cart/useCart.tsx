import { useProjectApi } from "@/context/hooks/useDataContextApi";
import {
  TAddNewProductRequest,
  TAddNewProductResponse,
} from "@/types/api/addNewProductType";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

const useCart = () => {
  const { client } = useProjectApi();
  const queryClient = useQueryClient();
  // const user = useRecoilValue(userState);

  // 메뉴판 api
  const menuApi = (id: number) => {
    return useQuery(["menu"], () => client.menu(id), {
      staleTime: Infinity,
    });
  };

  // 카트 추가 or 업데이트
  const addNewProductApi = useMutation<
    TAddNewProductResponse,
    AxiosError,
    TAddNewProductRequest,
    TAddNewProductResponse
  >((proudct) => client.addNewProduct(proudct), {
    onSuccess: () => queryClient.invalidateQueries(["addCart"]),
  });

  // 카트조회
  const getCartApi = useQuery(["getCart"], () => client.getCart(), {
    staleTime: Infinity,
  });

  // 카트삭제
  const productDeleteApi = useMutation((id) => client.productDelete(id), {
    onSuccess: () => queryClient.invalidateQueries(["deleteCart"]),
  });

  // 주문하기
  const cartOrderApi = useMutation((item) => client.cartOrder(item), {
    onSuccess: () => queryClient.invalidateQueries(["orderCart"]),
  });

  //주문내역
  const orderDetailsApi = useQuery(["getOrderDetail"], () => client.orderDetail(),{ 
    staleTime: Infinity
  });

  const favoriteApi = useMutation((data) => client.favoriteStore(data), {
    onSuccess: () => queryClient.invalidateQueries(["heart"]),
  });

  return {
    menuApi,
    addNewProductApi,
    getCartApi,
    productDeleteApi,
    cartOrderApi,
    orderDetailsApi,
    favoriteApi,
  };
};

export default useCart;
