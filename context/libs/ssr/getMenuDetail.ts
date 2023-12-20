import WinterFoodClient from "@/api/winterFoodClient";

export async function getNearbyData(id: number) {
  const winterFoodClient = new WinterFoodClient();
  const res = await winterFoodClient.mainPageNearby(id);
  return res;
}


export async function getSalesRateData(id:number){
  const winterFoodClient = new WinterFoodClient();
  const res = await winterFoodClient.mainPageSalesRate(id);
  return res;
}

export async function getReviewData(id:number){
  const winterFoodClient = new WinterFoodClient();
  const res = await winterFoodClient.mainPageReview(id);
  return res;
}


export async function getGradeData(id:number){
  const winterFoodClient = new WinterFoodClient();
  const res = await winterFoodClient.mainPageGrade(id);
  return res;
}

export default getNearbyData;
