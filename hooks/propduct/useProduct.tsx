import { useProjectApi } from "@/context/hooks/useDataContextApi";
import { useQuery } from "@tanstack/react-query";

export default function useProduct() {
  const { client } = useProjectApi();

  const nearbyApi = (id: number) => {
    return useQuery(["nearbyDetailData"], () => client.mainPageNearby(id), {
      staleTime: Infinity,
    });
  };

  const salesRateApi = (id: number) => {
    return useQuery(["salesDetailData"], () => client.mainPageSalesRate(id), {
      staleTime: Infinity,
    });
  };

  const reviewApi = (id: number) => {
    return useQuery(["reviewDetailData"], () => client.mainPageReview(id), {
      staleTime: Infinity,
    });
  };

  const gradeApi = (id: number) => {
    return useQuery(["gradeDetatilData"], () => client.mainPageGrade(id), {
      staleTime: Infinity,
    });
  };

  return { nearbyApi, salesRateApi, reviewApi, gradeApi };
}
