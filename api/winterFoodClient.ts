import axios, { AxiosInstance } from "axios";
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
import { TPhoneCertiResponse } from "@/types/api/phoneCertificationType";
import { DetailMenuType } from "@/types/api/detailMenuType";
import { TFindPwRequest, TFindPwResponse } from "@/types/api/findPwType";
import { TMenuResponse } from "@/types/api/menuType";
import { FavoriteResponse, FavoriteRequest } from "@/types/api/favoriteType";
import {
  TAddNewProductRequest,
  TAddNewProductResponse,
} from "@/types/api/addNewProductType";
import {
  CartDeleteRequest,
  CartDeleteResponse,
} from "@/types/api/cartDeleteType";
import { TFavoriteStoreResponse } from "@/types/api/favoriteStoreType";
import {
  CertifiCodeRequest,
  CertifiCodeResponse,
} from "@/types/api/certifiCodeType";
import {
  ResetPasswordRequestType,
  ResetPasswordResponeseType,
  ResetPwType,
} from "@/types/api/resetPasswordType";
import { StoreInfoData } from "@/types/api/storeInfoType";
import {
  GetCartData,
  OrderItemRequestType,
  OrderResultAllResponse,
  OrderResultData,
} from "@/types/api/getCartType";
import { ReviewWriteForm } from "@/types/api/reviewWriteType";
export default class WinterFoodClient {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
    });
    this.httpClient.interceptors.request.use((config) => {
      if (typeof window !== "undefined") {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        } else {
          localStorage.removeItem("accessToken");
        }
      }
      return config;
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

  // 1-phoneCerti 회원가입 등 가입할때 휴대폰 인증
  async phoneCertiSign(phoneNumber: string) {
    return this.httpClient
      .post(`/api/auth/sendCode`, { phoneNumber })
      .then((res) => res.data as TPhoneCertiResponse);
  }

  // 2-phoneCerti 아이디찾기, 비밀번호 찾기등 가입하고 나서 찾는 휴대폰 인증
  async phoneCertiFind(phoneNumber: string) {
    return this.httpClient
      .post(`/api/auth/sendAuthCodeFind`, { phoneNumber })
      .then((res) => res.data as TPhoneCertiResponse);
  }

  //인증코드 전송
  async certifiCode(data: CertifiCodeRequest) {
    return this.httpClient
      .post(`/api/auth/verifyCode`, data)
      .then((res) => res.data as CertifiCodeResponse);
  }

  //비밀번호 찾기
  async findPw(data: TFindPwRequest) {
    return this.httpClient
      .post(`/api/auth/verifyUser`, data)
      .then((res) => res.data as TFindPwResponse);
  }
  //비밀번호 변경
  async changePw(data: ResetPwType) {
    return this.httpClient
      .put(`/api/auth/resetPassword`, data)
      .then((res) => res.data as ResetPasswordResponeseType);
  }
  //가까운곳 top-5 ?
  async nearDistanceSnack(lat: number, lon: number) {
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
  async mainPageNearby(id: number) {
    return this.httpClient
      .get(`/main/menu-detail/${id}/nearby/proximity?latitude=37&longitude=127`)
      .then((res) => res.data as TMenuResponse);
  }
  // 메인메뉴클릭시 이동페이지 -> 판매량순
  async mainPageSalesRate(id: number) {
    return this.httpClient
      .get(
        `/main/menu-detail/${id}/nearby/sales-volume?latitude=37&longitude=127`
      )
      .then((res) => res.data as TMenuResponse);
  }
  // 메인메뉴클릭시 이동페이지 -> 리뷰순
  async mainPageReview(id: number) {
    return this.httpClient
      .get(
        `/main/menu-detail/${id}/nearby/review-count?latitude=37&longitude=127`
      )
      .then((res) => res.data as TMenuResponse);
  }
  // 메인메뉴클릭시 이동페이지 -> 평점순
  async mainPageGrade(id: number) {
    return this.httpClient
      .get(`/main/menu-detail/${id}/nearby/rating?latitude=37&longitude=127`)
      .then((res) => res.data as TMenuResponse);
  }

  //메뉴판
  async menu(id: number) {
    return this.httpClient
      .get(`/api/store/menu/${id}`)
      .then((res) => res.data as DetailMenuType);
  }

  //가게정보
  async storeInfo(id: number) {
    return this.httpClient
      .get(`/api/store/info/${id}`)
      .then((res) => res.data.data as StoreInfoData);
  }

  //리뷰정보
  async storeReviewInfo(id: number) {
    return this.httpClient
      .get(`/api/store/review/${id}`)
      .then((res) => res.data.data);
  }

  //장바구니 추가 , 업데이트
  async addNewProduct(product: TAddNewProductRequest) {
    return this.httpClient
      .post(`/api/cart/items`, product)
      .then((res) => res.data as TAddNewProductResponse);
  }

  // 장바구니 조회
  async getCart() {
    return this.httpClient
      .get(`/api/cart/items`)
      .then((res) => res.data as GetCartData);
  }

  // 장바구니 삭제
  async productDelete(itemId: CartDeleteRequest) {
    return this.httpClient
      .delete(`/api/cart/items`, { data: itemId })
      .then((res) => res.data as CartDeleteResponse);
  }

  //주문하기
  async cartOrder(item: OrderItemRequestType) {
    return this.httpClient
      .post(`/api/cart/order`, item)
      .then((res) => res.data as OrderResultData);
  }
  // 주문내역
  async orderDetail() {
    return this.httpClient
      .get(`/api/mypage/orders`)
      .then((res) => res.data as OrderResultAllResponse);
  }

  //찜하기
  async favorite(product: FavoriteRequest) {
    return this.httpClient
      .post(`/api/store/favorite`, product)
      .then((res) => res.data as FavoriteResponse);
  }

  //찜한매장
  async favoriteStore() {
    return this.httpClient
      .get(`/api/mypage/favorite`)
      .then((res) => res.data as TFavoriteStoreResponse);
  }

  //리뷰작성하기
  async reviewWrite(form: ReviewWriteForm) {
    return this.httpClient
      .patch(`/api/mypage/review/1`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
  }
}
