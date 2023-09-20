import axios from "axios";

export default class FakeWinterFoodClient {
  async main() {
    return axios.get("/fakeApi/fakeMain.json");
  }
  async menuDetail() {
    return axios.get(`/fakeApi/fakeMenuDetailData.json`);
  }
}
