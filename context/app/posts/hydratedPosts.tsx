import { dehydrate, Hydrate, QueryClient } from "@tanstack/react-query";
import getQueryClient from "../getQueryClient";
import PostsPage from "@/pages/posts";
import getPosts, { getNearbyData } from "./getPosts";
 
export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['nearbyData'], getNearbyData);
    return{
      props:{
        dehydratedProps: dehydrate(queryClient)
      }
    }
}






// export default async function hydratedPosts() {
//   const queryClient = getQueryClient();
//   await queryClient.prefetchQuery(["posts"], getPosts);
//   const dehydratedState = dehydrate(queryClient);

//   return (
//     <Hydrate state={dehydratedState}>
//       <PostsPage />
//     </Hydrate>
//   );
// }
