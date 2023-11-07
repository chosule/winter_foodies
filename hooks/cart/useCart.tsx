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

  const addNewProductApi = useMutation((id) => client.addNewProduct(id), {
    onSuccess: () => queryClient.invalidateQueries(["addCart"]),
  });

  const getCartApi = () => {
    return useQuery(["getCart"], () => client.getCart(), {
      staleTime: Infinity,
    });
  };

  return { menuApi, addNewProductApi, getCartApi };
};

export default useCart;
