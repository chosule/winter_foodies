import axios, { AxiosInstance, Axios } from "axios";

type THeaders = {
  "Content-Type": string;
  "application/json": string;
};
export default class WinterFoodClient {
  httpClient: AxiosInstance;

  constructor() {
    //기본설정
    this.httpClient = axios.create({
      baseURL: "http://localhost:3000",
      headers: {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    });
  }
  async login(form) {
    return this.httpClient
      .post(`/api/auth/login`, form)
      .then((res) => res.data);
  }
}
