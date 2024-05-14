const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");

admin.initializeApp(); // 어드민 초기화. 클라우드 함수, 호스팅만 사용할 경우 따로 설정파일을 넘겨주지 않아도 됨
const app = express();

//express.router : router는 미들웨어 및 라우팅 메소드의 모음 , 라우터를 사용하면 서버 애플리케이션을 조직화하고 모듈화 할 수 있다.
// express.Router() 를 사용하여 새로운 라우터 생성
const projectApp = express.Router();

// 해당 부분에 CRUD 라우트 설정
const db = admin.firestore();
const menuDetailCollection = "menu-detail";

projectApp.get(`/menu-detail`, async (req, res) => {
  try {
    const menuDetailDoc = await db
      .collection(menuDetailCollection)
      .doc(req.query.menuId)
      .get();
    res.status(200).send({ id: menuDetailDoc.id, ...menuDetailDoc.data() });
  } catch (error) {
    res.status(400).send("데이터 불러오기 실패");
  }
});

app.use(express.json()); // body-parser 설정
app.use("/api", projectApp);

// Firebase functions로 앱을 export하여 클라우드 함수로 배포될수 있도록한다.
exports.projectApp = functions.region("asia-northeast3").https.onRequest(app);
