import axios, { AxiosInstance, Axios } from "axios";
import { TLoginResponse, TLoginRequest } from "../types/api/loginType";
import {
  TKakaoLoginRequest,
  TKakaoLoginResponse,
} from "@/types/api/kakaoLoginType";
import { TSignUpRequest, TSignUpResponse } from "@/types/api/signUpType";
import {
  TNaverLoginRequest,
  TNaverLoginResponse,
} from "@/types/api/naverLoginType";
import { TFindIdRequest, TFindIdResponse } from "@/types/api/findIdType";
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
  // 로그인
  async login(form: TLoginRequest): Promise<TLoginResponse> {
    return this.httpClient
      .post(`/api/auth/login`, form)
      .then((res) => res.data as TLoginResponse);
  }
  // 회원가입
  async signUp(form: TSignUpRequest) {
    return this.httpClient
      .post(`/api/auth/register`, form)
      .then((res) => res.data as TSignUpResponse);
  }
  //아이디 찾기
  async findId(data: TFindIdRequest) {
    return this.httpClient
      .post(`/api/auth/findId`, data)
      .then((res) => res.data as TFindIdResponse);
  }
  // async searchMap() {
  //   return axios.get(`/fakeApi/fakeApiSearchMap.json`).then((res) => res.data);
  // }

  async nearDistanceSnack(lat, lon) {
    return this.httpClient
      .get(`/api/main/snacks?lat=${lat}&lon=${lon}`)
      .then((res) => res.data.data);
  }

  //카카오 로그인
  async kakaoLogin(code: TKakaoLoginRequest) {
    return this.httpClient
      .post(`/api/oauth/kakao`, code)
      .then((res) => res.data as TKakaoLoginResponse);
  }
  //네이버 로그인
  async naverLogin(code: TNaverLoginRequest) {
    return this.httpClient
      .post(`/api/oauth/naver`, code)
      .then((res) => res.data as TNaverLoginResponse);
  }
}
