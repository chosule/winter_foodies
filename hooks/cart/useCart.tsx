import { useProjectApi } from "@/context/hooks/useDataContextApi";
import { userState } from "@/recoil/atom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";

const useCart = () => {
  const queryClient = useQueryClient();
  const { client } = useProjectApi();
  const user = useRecoilValue(userState);
  // 메뉴판
  //   const menuApi = (id: number, userAuth: string) => {
  //     return useQuery(["menu"], () => client.menu(id, userAuth), {
  //       staleTime: Infinity,
  //     });
  //   };
  const menuApi = useMutation(
    ({ id, jwt }) => {
      return client.menu(id, jwt);
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["menu"]),
    }
  );

  return { menuApi };
};

export default useCart;
