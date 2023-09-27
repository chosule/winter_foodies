import axios, { AxiosInstance, Axios } from "axios";
import { TLoginResponse, TLoginRequest } from "../types/api/loginType";

export default class WinterFoodClient {
  httpClient: AxiosInstance;

  constructor() {
    //기본설정
    this.httpClient = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
    });
  }

  async login(form: TLoginRequest): Promise<TLoginResponse> {
    return this.httpClient
      .post(`/api/auth/login`, form)
      .then((res) => res.data as TLoginResponse);
  }

  async signUp(form: string) {
    return this.httpClient
      .post(`/api/auth/register`, form)
      .then((res) => res.data);
  }

  async searchMap() {
    return axios.get(`/fakeApi/fakeApiSearchMap.json`).then((res) => res.data);
  }

  async nearDistanceRank(lat, lon) {
    return axios
      .get(`/api/main/snacks?lat=${lat}&lon=${lon}`)
      .then((res) => res.data);
  }
}
