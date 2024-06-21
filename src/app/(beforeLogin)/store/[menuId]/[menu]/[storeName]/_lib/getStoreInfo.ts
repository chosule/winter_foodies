import { GetStoreInfo } from "@/app/(beforeLogin)/store/_model/storeMenu";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function getStoreInfo(menuId: string, storeName: string) {
  const { data } = useSWR<GetStoreInfo>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/store/${menuId}/info/${storeName}`,
    fetcher
  );
  return { data };
}
