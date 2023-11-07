import { useProjectApi } from "@/context/hooks/useDataContextApi";
import { userState } from "@/recoil/atom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";

const useCart = () => {
  const queryClient = useQueryClient();
  const { client } = useProjectApi();
  const user = useRecoilValue(userState);

  // 메뉴판 api
  const menuApi = (id) => {
    return useQuery(["menu"], () => client.menu(id), {
      staleTime: Infinity,
    });
  };

  return { menuApi };
};

export default useCart;
