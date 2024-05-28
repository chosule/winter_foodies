const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

admin.initializeApp();
const app = express();
app.use(cors({ origin: true }));
app.use(cookieParser());
app.use(express.json()); // JSON 파싱 미들웨어

const projectApp = express.Router();

const db = admin.firestore();
const menuDetailCollection = "menu-detail";
const loginCollection = "login";
const signupCollection = "signup";

projectApp.get(`/menu-detail/:menuId`, async (req, res) => {
  try {
    const menuDetailDoc = await db
      .collection(menuDetailCollection)
      .doc(req.params.menuId)
      .get();
    res.status(200).send({ result: "success", ...menuDetailDoc.data() });
  } catch (error) {
    res.status(400).send("데이터 불러오기 실패");
  }
});

projectApp.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const login = {
      username: req.body.id,
      password: req.body.password,
    };
    res.cookie("user", username, {
      httpOnly: true, // 자바스크립트로 쿠키에 접근할수없다
      secure: true, //http 일경우에만 쿠키전송
    });
    // 로그인 성공 시 쿠키 설정
    res.setHeader("Set-Cookie", "connect.sid=;HttpOnly;Path=/;Max-Age=0");
    const loginDoc = await db.collection(loginCollection).add(login);
    res.status(200).send({ id: `${loginDoc.id}` });
  } catch (error) {
    console.log("error", error);
    res.status(400).send("로그인 실패", error);
  }
});

projectApp.post("/signup", async (req, res) => {
  try {
    const { id, password } = req.body;

    const existingUserQuery = await db
      .collection(signupCollection)
      .where("id", "==", id)
      .get();
    console.log("existing", existingUserQuery);

    if (!existingUserQuery.empty) {
      return res.status(403).json({ error: "이미 존재하는 아이디입니다." });
    }

    const signup = {
      id: req.body.id,
      name: req.body.name,
      password: req.body.password,
    };
    console.log("signup", signup);

    const signupDoc = await db.collection(signupCollection).add(signup);
    res.status(200).send({ result: `회원가입 성공 ${signupDoc.id}` });
  } catch (error) {
    res.status(400).json({ error: "회원가입 실패" }); // JSON 응답
  }
});

app.use("/api", projectApp);

exports.projectAPI = functions.region("asia-northeast3").https.onRequest(app);
