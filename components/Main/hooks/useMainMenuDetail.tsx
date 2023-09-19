import { useQuery, useQueryClient } from "@tanstack/react-query";

type TMainMenuDetail = {
  averageRating: number;
  estimatedCookingTime: string;
  like: string;
  popularProductsDtoList: string;
};

export async function useMainMenuDetail() {
  const queryClient = useQueryClient();

  const mainMenuDetailQuery = useQuery(["menuDetail"]);
  //   const response = await fetch("/types/api/menuDetail.json");
  //   const mainMenuDetailApi = (await response.json()) as TMainMenuDetail;
  //   return mainMenuDetailApi;
}

export default useMainMenuDetail;
