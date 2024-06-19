import useSWR from "swr";
import { GetStoreMenu } from "../../../../_model/storeMenu";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function getStoreMenu(menuId: string, storeName: string) {
  const { data: storeMenu } = useSWR<GetStoreMenu>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/store/${menuId}/menu/${storeName}`,
    fetcher
  );
  return { storeMenu };
}
