import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getNearbyData } from "./getMenuDetail";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["nearbyData"], getNearbyData);
  return {
    props: {
      dehydratedProps: dehydrate(queryClient),
    },
  };
}
