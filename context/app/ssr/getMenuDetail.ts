import WinterFoodClient from "@/api/winterFoodClient";

export async function getNearbyData(id: number) {
  const winterFoodClient = new WinterFoodClient();

  const res = await winterFoodClient.mainPageNearby(id);

  return res;
}

export default getNearbyData;
