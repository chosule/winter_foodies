import axios, { AxiosInstance, Axios } from "axios";

type TLogin = {
  usernameOrEmail: string;
  password: string;
};

type TSignUp = {};
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
  async login(form: string): Promise<TLogin> {
    return this.httpClient
      .post(`/api/auth/login`, form)
      .then((res) => res.data);
  }
  async signUp(form: string): Promise<TLogin> {
    return this.httpClient
      .post(`/api/auth/register`, form)
      .then((res) => res.data);
  }
  async searchMap() {
    return axios.get(`/fakeApi/fakeApiSearchMap.json`).then((res) => res.data);
  }
}
