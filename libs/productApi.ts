import WinterFoodClient from "@/api/winterFoodClient";
import removeUndefinedForNextJsSerializing from "@/hooks/useRemoveUndefinedSerializing";

export async function getNearbyData(id: number) {
  try{
    const winterFoodClient = new WinterFoodClient();
    const res = await winterFoodClient.mainPageNearby(id);
    if (!res || Object.keys(res).length === 0) {
      throw new Error("No data received from the server");
    }

    const posts = removeUndefinedForNextJsSerializing(res);
    return posts;
  }catch(error){
    console.log('error',error)
  }
}

export async function getSalesRateData(id: number) {
  try{
    const winterFoodClient = new WinterFoodClient();
    const res = await winterFoodClient.mainPageSalesRate(id);
    if (!res || Object.keys(res).length === 0) {
      throw new Error("No data received from the server");
    }

    const posts = removeUndefinedForNextJsSerializing(res);
    return posts;
  }catch(error){
    console.log('error',error)
  }
}

export async function getReviewData(id: number) {
  try{
    const winterFoodClient = new WinterFoodClient();
    const res = await winterFoodClient.mainPageReview(id);
    if (!res || Object.keys(res).length === 0) {
      throw new Error("No data received from the server");
    }

    const posts = removeUndefinedForNextJsSerializing(res);
    return posts;
  }catch(error){
    console.log('error',error)
  }
}

export async function getGradeData(id: number) {
  try{
    const winterFoodClient = new WinterFoodClient();
    const res = await winterFoodClient.mainPageGrade(id);
    if (!res || Object.keys(res).length === 0) {
      throw new Error("No data received from the server");
    }

    const posts = removeUndefinedForNextJsSerializing(res);
    return posts;
  }catch(error){
    console.log('error',error)
  }
}

export async function getHeartStore() {
  try {
    const winterFoodClient = new WinterFoodClient();
    const res = await winterFoodClient.favoriteStore();

    if (!res || Object.keys(res).length === 0) {
      throw new Error("No data received from the server");
    }

    const posts = removeUndefinedForNextJsSerializing(res);
    return posts;
  } catch (error) {
    // console.error("찜한매장error", error);
    return {};
  }
}

export default getNearbyData;
