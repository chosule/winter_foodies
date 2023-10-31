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
import {
  TPhoneCertiRequest,
  TPhoneCertiResponse,
} from "@/types/api/phoneCertificationType";
import {
  TMenuDetailRequest,
  TMenuDetailResponse,
} from "@/types/api/nearbyType";
import {
  TNearSnackRequest,
  TNearSnackResponse,
} from "@/types/api/nearSnackType";
import { TFindPwRequest, TFindPwResponse } from "@/types/api/findPwType";

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
  async login(form: TLoginRequest) {
    return this.httpClient
      .post(`/api/auth/login`, form)
      .then((res) => res.data.data as TLoginResponse);
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
      .then((res) => res.data.data as TFindIdResponse);
  }
  //휴대폰 인증
  async phoneCertification(data: TPhoneCertiRequest) {
    return this.httpClient
      .post(`/api/auth/sendAuthCode`, { phoneNumber: data })
      .then((res) => res.data as TPhoneCertiResponse);
  }
  //인증코드 전송
  async certifiCode(data) {
    return this.httpClient
      .post(`/api/auth/verify`, data)
      .then((res) => res.data);
  }

  //비밀번호 찾기
  async findPw(data: TFindPwRequest) {
    return this.httpClient
      .post(`/api/auth/verifyUser`, data)
      .then((res) => res.data as TFindPwResponse);
  }
  //비밀번호 변경
  async changePw(data) {
    return this.httpClient
      .put(`/api/auth/resetPassword`, data)
      .then((res) => res.data);
  }
  //가까운곳 top-5 ?
  async nearDistanceSnack(
    lat: TNearSnackRequest["lat"],
    lon: TNearSnackRequest["lon"]
  ) {
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

  // 메인메뉴클릭시 이동페이지 -> 가까운순
  async mainPageNearby(id: TMenuDetailRequest) {
    console.log("id?", id);
    return this.httpClient
      .get(`/main/menu-detail/${id}/nearby/proximity?latitude=37&longitude=127`)

      .then((res) => res.data.data as TMenuDetailResponse);
  }
  // 메인메뉴클릭시 이동페이지 -> 판매량순
  async mainPageSalesRate(id: TMenuDetailRequest) {
    return this.httpClient
      .get(
        `/main/menu-detail/${id}/nearby/sales-volume?latitude=37&longitude=127`
      )
      .then((res) => res.data.data as TMenuDetailResponse);
  }
  // 메인메뉴클릭시 이동페이지 -> 리뷰순
  async mainPageReview(id: TMenuDetailRequest) {
    return this.httpClient
      .get(
        `/main/menu-detail/${id}/nearby/review-count?latitude=37&longitude=127`
      )
      .then((res) => res.data.data as TMenuDetailResponse);
  }
  // 메인메뉴클릭시 이동페이지 -> 평점순
  async mainPageGrade(id: TMenuDetailRequest) {
    return this.httpClient
      .get(`/main/menu-detail/${id}/nearby/rating?latitude=37&longitude=127`)
      .then((res) => res.data.data as TMenuDetailResponse);
  }

  //장바구니 추가
  async addNewProduct() {
    return this.httpClient.post;
  }
}
