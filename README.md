## WinterFoodies 프로젝트
> **길거리 간식들을 찾아 메뉴들을 선택하고 주문까지 할수있는 서비스를 만들었습니다.**
- 인원 : FE 및 디자인: 김초슬 인원 1명 / BE : 1명
- 기간 : 약 3개월 (23/10 ~)

### 1.설치 및 실행

```js
npm i 
npm run dev
```

### 2.적용기술
- 라이브러리 : react
- 프레임워크 : nextjs (page router)
- 상태관리 : tanstack query , recoil
- style : emotion, styled-component , mui
- 및 zod , react-hook-form 등등

### 3.주요기능
데이터 관리
  - api를 받아오기 위한 공간인 winterFoodClient.ts 에서 각각 api를 axios를 사용해 비동기적으로 받아옴.
  - 새로운 winterFoodClient 인스턴스를 생성해주고 _app.tsx 에서 children으로 감싸 전역적으로 사용가능하게 구현.
  - 데이터관리를 위해 reqct-query사용 (GET은 useQuery / POST,DELETE는 대부분 useMutation 으로 받아오기)
  - 
  - 
1. login (로그인 / 회원가입 / 아이디찾기 / 비밀번호찾기)
   구현설명
   - zod 와 react hook form 라이브러리를 이용해 유효성 검사 로직 구현
   - zod로 구현한 form안에 submit이 여러개인 이슈로 인하여 useValid.tsx 생성해 useStats를 이용한 유효성 검사로 `리팩토링`
    
3. main
   - 
5. cart (장바구니 담기, 조회, 장바구니 추가 및 삭제)
6. store정보 (메뉴판, 가게정보, 리뷰정보)
7. mypage (찜한매장, 주문내역)


!!
### 4.구현  

#### 1-1) 메인

![2023-12-28 13 32 54 (1)](https://github.com/chosule/winter_foodies/assets/89799325/660aea64-aed2-4325-814f-0b1c8aba1324)

#### 1-2) 로그인
![ezgif com-video-to-gif-converter (2)](https://github.com/chosule/winter_foodies/assets/89799325/91482b54-4ed6-4423-8d53-3263f79982f2)


#### 1-3) 각각 메뉴들 선택후 장바구니에 추가
![ezgif com-video-to-gif-converter](https://github.com/chosule/winter_foodies/assets/89799325/27397302-b780-46ec-b28f-0b032aa81730)


#### 1-4) 장바구니 수량 추가 및 삭제
![ezgif com-video-to-gif-converter (1)](https://github.com/chosule/winter_foodies/assets/89799325/f8904438-a3cc-4b90-9beb-58d02150e173)


