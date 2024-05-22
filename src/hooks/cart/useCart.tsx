"use client";
import { useProjectApi } from "@/src/context/hooks/useDataContextApi";
import {
  TAddNewProductRequest,
  TAddNewProductResponse,
} from "@/src/types/api/addNewProductType";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  FavoriteRequest,
  FavoriteResponse,
} from "@/src/types/api/favoriteType";
import {
  CartDeleteRequest,
  CartDeleteResponse,
} from "@/src/types/api/cartDeleteType";
import {
  OrderItemRequestType,
  OrderResultAllResponse,
  OrderResultData,
} from "@/src/types/api/getCartType";

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

  //리뷰정보
  const reviewInfo = (id: number) => {
    return useQuery(["getReviews"], () => client.storeReviewInfo(id), {
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
  const productDeleteApi = useMutation<
    CartDeleteResponse,
    AxiosError,
    CartDeleteRequest,
    CartDeleteResponse
  >((id) => client.productDelete(id), {
    onSuccess: () => queryClient.invalidateQueries(["deleteCart"]),
  });

  // 주문하기
  const cartOrderApi = useMutation<
    OrderResultData,
    AxiosError,
    OrderItemRequestType,
    OrderResultData
  >((item) => client.cartOrder(item), {
    onSuccess: () => queryClient.invalidateQueries(["orderCart"]),
  });

  //주문내역
  const orderDetailsApi = useQuery<OrderResultAllResponse>(
    ["getOrderList"],
    () => client.orderDetail(),
    {
      staleTime: Infinity,
    }
  );

  //찜하기
  const favoriteApi = useMutation<
    FavoriteResponse,
    AxiosError,
    FavoriteRequest,
    FavoriteResponse
  >((data) => client.favorite(data), {
    onSuccess: () => queryClient.invalidateQueries(["heart"]),
  });

  // const reviewWriteApi = useMutation((formData) => client.reviewWrite(formData),{
  //   onSuccess: () => queryClient.invalidateQueries(['reviewWrite'])
  // })

  return {
    menuApi,
    addNewProductApi,
    getCartApi,
    productDeleteApi,
    cartOrderApi,
    orderDetailsApi,
    favoriteApi,
    reviewInfo,
    // reviewWriteApi
  };
};

export default useCart;
