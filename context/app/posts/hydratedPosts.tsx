import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../getQueryClient";
import PostsPage from "@/pages/posts";
import getPosts from "./getPosts";

export default async function hydratedPosts() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["posts"], getPosts);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <PostsPage />
    </Hydrate>
  );
}
