import { useProjectApi } from "@/context/hooks/useDataContextApi";
import { useQuery } from "@tanstack/react-query";

export default function useProduct() {
  const { client } = useProjectApi();

  const nearbyApi = (id) => {
    return useQuery(["nearbyData"], () => client.mainPageNearby(id));
  };
  return { nearbyApi };
}
