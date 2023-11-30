// export interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

import { useProjectApi } from "@/context/hooks/useDataContextApi";

export function useNearbyData() {
  const { client } = useProjectApi();

  async function getNearbyData() {
    const res = await client.mainPageNearby();
    return res;
  }

  return { getNearbyData };
}


export default useNearbyData;



// export async function getPosts() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = (await response.json()) as Post[];
//   return posts;
// }