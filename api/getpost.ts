import getNearbyData, { getHeartStore } from "@/libs/productApi";
import { deleteUndefined } from "@/hooks/useDeleteUndefined";
import WinterFoodClient from "./winterFoodClient";



const removeUndefinedForNextJsSerializing = <T,>(props: T): T =>

  Object.fromEntries(
    Object.entries(props).filter(([, value]) => value !== undefined)
  ) as T;


  
  export async function getPosts() {
    try {
        const winterFoodClient = new WinterFoodClient();
        const res = await winterFoodClient.favoriteStore();
  
        if (!res || Object.keys(res).length === 0) {
        // 데이터가 없을 경우 에러 throw
        throw new Error("No data received from the server");
      }
    const posts = removeUndefinedForNextJsSerializing(res);
      return posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return {}; // 에러가 발생할 경우 빈 객체 반환 또는 에러 처리를 적절하게 수행
    }
  }
  


export default getPosts;
