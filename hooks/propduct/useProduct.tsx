import { useProjectApi } from "@/context/hooks/useDataContextApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function useProduct() {
  const { client } = useProjectApi();
  const queryClient = useQueryClient();

  //가까운순
  // const nearbyApi = (id: number) => {
  //   return useQuery(["nearbyDetailData"], () => client.mainPageNearby(id), {
  //     staleTime: Infinity,
  //   });
  // };
  //판매량순
  // const salesRateApi = (id: number) => {
  //   return useQuery(["salesDetailData"], () => client.mainPageSalesRate(id), {
  //     staleTime: Infinity,
  //   });
  // };
  //리뷰순
  // const reviewApi = (id: number) => {
  //   return useQuery(["reviewDetailData"], () => client.mainPageReview(id), {
  //     staleTime: Infinity,
  //   });
  // };
  // //별점순
  // const gradeApi = (id: number) => {
  //   return useQuery(["gradeDetatilData"], () => client.mainPageGrade(id), {
  //     staleTime: Infinity,
  //   });
  // };

  // //가게 정보
  const storeInfoApi = (id) => {
    return useQuery(["storeIndo"], () => client.storeInfo(id), {
      staleTime: Infinity,
    });
  };

  // 찜하기
  // const favoriteApi = useMutation((product) => client.favorite(product),{
  //   onSuccess:() => queryClient.invalidateQueries(['favorites'])
  // })

  // // 찜한매장
  // const favoriteStoreApi = useQuery(['favoriteStore'], () => client.favoriteStore(),{
  //   staleTime: Infinity,
  // })

  return {
    // nearbyApi,
    // salesRateApi,
    // reviewApi,
    // gradeApi,
    storeInfoApi,
    // favoriteApi,
    // favoriteStoreApi
  };
}
