## 💎 WinterFoodies 프로젝트
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

### 3.주요기능의 대한 간단 코멘트 ☁
---

📝 **데이터 관리**

- api를 받아오기 위한 공간인 winterFoodClient.ts 에서 각각 api를 axios를 사용해 비동기적으로 받아옴.
- 새로운 winterFoodClient 인스턴스를 생성해주고 _app.tsx 에서 children으로 감싸 전역적으로 사용가능하게 구현.
- 데이터관리를 위해 reqct-query사용 (GET은 useQuery / POST,DELETE는 대부분 useMutation 으로 받아오기)   

📝 **recoil을 이용한 상태관리**
- atom생성하여 전역적으로 상태를 분리해야하는 경우 상태관리 atom으로 적용

📝 **login page** (로그인 / 회원가입 / 아이디찾기 / 비밀번호찾기)
- zod 와 react hook form 라이브러리를 이용해 유효성 검사 로직 구현.
- zod shema.tsx 생성해 유효성에 따른 에러메세지 구현. 
- zod로 구현한 form안에 submit이 여러개인 이슈로 인하여 useValid.tsx 생성해 useStats를 이용한 유효성 검사로 `리팩토링`

📝 **main page**

1. **검색창**
   - 제일 상단 부분에 있는 검색기능 (간단하게 검색만 필터링으로 구현 -> 후에 히스토리 및 자동검색기능 리팩토링 필요)
2. **실시간 인기 있는 간식**
   - 실시간 인기 검색어 기능으로 interval 메서드로 비교적 간단하게 구현 완성(DB 미완성으로 프론트에서 구현)
3. **각 메뉴에 따른 상세 스토어로 이동 및 주문**
   - 각 9가지 **길거리 음식**으로 한정되어 각각 메뉴들 클릭시 **가까운순/판매량순/리뷰순/별점순** 으로 **페이지 이동**처리.
   - 가까운순/판매량순/리뷰순/별점순 으로 나온 메뉴들 클릭시 해당 스토어 메뉴/정보/리뷰 노출 , 메뉴에 따른 장바구니에 추가하는 기능구현.
4. **나와 가장 가까운 간식 top5**
   - 내 위치에서 가장 가까운 간식스토어를 찾아 알려주는 section.
   - 길거리 스토어가 DB로 찾기 어려워 간식스토어의 DB를 가져와 처리

📝**cart page**
**장바구니** (장바구니 담기, 조회, 장바구니 추가 및 삭제)
- 장바구니 페이지에서는 상세 스토어 페이지에서 **추가하기 누른 상품들**이 담겨있음. (한스토어의 메뉴들만 가능, 다른스토어의 상품을 추가하기 누를경우 담겨있던 장바구니상품들은 삭제처리)
- 수량을 원하는대로 조절 하고 하단에 주문하기 버튼 을 누르면 **주문 완료 페이지로 이동**
- 상품을 삭제할경우 삭제처리.

📝 **mypage** (찜한매장, 주문내역)
1. 찜한매장
   -상세 스토어에서 찜하기를 누른 스토어를 모아 확인할수있도록 구현.
~~미완성부분~~
2. 내정보
3. 리뷰관리
4. 주문내역
~~(백엔드분의 이슈로 인한..)~~

## 앞으로의 계획 👆 
- **CI CD** 를 지향하여 **지속적인 리팩토링** 및 코드의 간결성을 계속 생각해 제 코드에 녹일수있도록 프로그래밍 할 예정입니다. 
- 배포는 **aws** 를 이용하여 배포할 예정입니다.(24.01.29)


### UI 살펴보기
 #### 1-1) 메인

![2023-12-28 13 32 54 (1)](https://github.com/chosule/winter_foodies/assets/89799325/660aea64-aed2-4325-814f-0b1c8aba1324)

#### 1-2) 로그인
![ezgif com-video-to-gif-converter (2)](https://github.com/chosule/winter_foodies/assets/89799325/91482b54-4ed6-4423-8d53-3263f79982f2)


#### 1-3) 각각 메뉴들 선택후 장바구니에 추가
![ezgif com-video-to-gif-converter](https://github.com/chosule/winter_foodies/assets/89799325/27397302-b780-46ec-b28f-0b032aa81730)


#### 1-4) 장바구니 수량 추가 및 삭제
![ezgif com-video-to-gif-converter (1)](https://github.com/chosule/winter_foodies/assets/89799325/f8904438-a3cc-4b90-9beb-58d02150e173)


