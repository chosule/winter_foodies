export default class WinterFoodApi {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async menuDetail() {
    return this.apiClient.menuDetail.then((res) =>
      console.log("데이터res", res)
    );
  }
}
