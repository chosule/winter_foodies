import { useProjectApi } from "@/context/hooks/useDataContextApi";
import { userState } from "@/recoil/atom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";

const useCart = () => {
  const { client } = useProjectApi();
  const queryClient = useQueryClient();
  // const user = useRecoilValue(userState);

  // 메뉴판 api
  const menuApi = (id) => {
    return useQuery(["menu"], () => client.menu(id), {
      staleTime: Infinity,
    });
  };

  // 카드 추가 or 업데이트
  const addNewProductApi = useMutation(
    (proudct) => client.addNewProduct(proudct),
    {
      onSuccess: () => queryClient.invalidateQueries(["addCart"]),
    }
  );

  // 카트조회
  // const getCartApi = useQuery(["getCart"], () => client.getCart());

  // 카트삭제
  const productDeleteApi = useMutation((id) => client.productDelete(id), {
    onSuccess: () => queryClient.invalidateQueries(["deleteCart"]),
  });

  return { menuApi, addNewProductApi, productDeleteApi };
};

export default useCart;
