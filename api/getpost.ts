import getNearbyData, { getHeartStore } from "@/libs/productApi";
import { deleteUndefined } from "@/hooks/useDeleteUndefined";

export async function getPosts() {
  const response = await getHeartStore();
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts = await response;
  return response;
}

export default getPosts;
