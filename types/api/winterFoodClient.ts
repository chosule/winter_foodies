import axios, { AxiosInstance, Axios } from "axios";

export default class winterFoodClient {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "http://localhost:3000",
    });
  }
  //   async menuDetail() {
  //     return this.httpClient
  //       .get(`/main`)
  //       .then((res) => res.data);
  //   }
}
