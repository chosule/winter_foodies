import WinterFoodClient from "@/api/winterFoodClient";
import removeUndefinedForNextJsSerializing from "@/hooks/useRemoveUndefinedSerializing";

export async function getNearbyData(id: number) {
  const winterFoodClient = new WinterFoodClient();
  const res = await winterFoodClient.mainPageNearby(id);
  return res;
}

export async function getSalesRateData(id: number) {
  const winterFoodClient = new WinterFoodClient();
  const res = await winterFoodClient.mainPageSalesRate(id);
  return res;
}

export async function getReviewData(id: number) {
  const winterFoodClient = new WinterFoodClient();
  const res = await winterFoodClient.mainPageReview(id);
  return res;
}

export async function getGradeData(id: number) {
  const winterFoodClient = new WinterFoodClient();
  const res = await winterFoodClient.mainPageGrade(id);
  return res;
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
    // console.error("안나면이상한 에러", error);
    return {};
  }
}

export default getNearbyData;
