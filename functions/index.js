const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp();
const app = express();
app.use(cors({ origin: true }));

const projectApp = express.Router();

const db = admin.firestore();
const menuDetailCollection = "menu-detail";

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

app.use(express.json());
app.use("/api", projectApp);

exports.projectAPI = functions.region("asia-northeast3").https.onRequest(app);
