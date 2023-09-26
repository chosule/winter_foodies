import axios from "axios";

export default class FakeWinterFoodClient {
  constructor() {}
  async main() {
    return axios.get("/fakeApi/fakeMain.json");
  }
  async menuDetail() {
    return axios
      .get(`/fakeApi/fakeMenuDetailData.json`)
      .then((res) => res.data);
  }
  async searchMap() {
    return axios.get(`/fakeApi/fakeApiSearchMap.json`).then((res) => res.data);
  }
}
