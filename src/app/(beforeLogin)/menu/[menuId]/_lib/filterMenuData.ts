import { GetMenuData } from "../_model/menu";

const filterMenuData = (data: GetMenuData[] | undefined, sortBy: string) => {
  if (!data) return [];

  switch (sortBy) {
    case "review":
      return data.sort((a, b) => b.review - a.review);
    case "distance":
      return data.sort((a, b) => a.distance - b.distance);
    case "sales":
      return data.sort((a, b) => b.sales - a.sales);
    case "rating":
      return data.sort((a, b) => b.rating - a.rating);
    default:
      return data;
  }
};

export default filterMenuData;
