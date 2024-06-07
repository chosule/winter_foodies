import useSWR from "swr";
import { GetLatLng } from "../_model/around";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function getAround() {
  const { data } = useSWR<GetLatLng>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/nearby-locations`,
    fetcher
  );
  return { data };
}
