const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");
const { fileParser } = require("express-multipart-file-parser");

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: "winter-foodis-new.appspot.com",
};

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "winter-foodis-new.appspot.com",
});

const app = express();
app.use(cors({ origin: true }));
app.use(cookieParser());
app.use(express.json()); // JSON 파싱 미들웨어
app.use(
  fileParser({
    rawBodyOptions: {
      limit: "10mb",
    },
  })
);

const projectApp = express.Router();

const db = admin.firestore();
const menuDetailCollection = "menu-detail";
const loginCollection = "login";
const signupCollection = "signup";
const storeMenuCollection = "store";
const cartCollection = "cart";
const orderCollection = "order";
const likeCollection = "like";
const reviewCollection = "review";

const bucket = admin.storage().bucket();

//로그인
projectApp.post("/login", async (req, res) => {
  try {
    const { id, password } = req.body;

    // Firestore에서 사용자 조회
    const userQuery = await db
      .collection(signupCollection)
      .where("id", "==", id)
      .get();

    if (userQuery.empty) {
      // 사용자 존재하지 않음
      return res.status(401).send({ error: "존재하지 않는 사용자입니다." });
    }

    const user = userQuery.docs[0].data();

    if (user.password !== password) {
      // 비밀번호 불일치
      return res.status(401).send({ error: "비밀번호가 일치하지 않습니다." });
    }
    const firebaseUserId = userQuery.docs[0].id;

    // 로그인 성공 시 쿠키 설정
    res.cookie("user", id, {
      httpOnly: true, // 자바스크립트로 쿠키에 접근할 수 없음
      secure: true, // HTTPS 일경우에만 쿠키 전송
    });

    res
      .status(200)
      .send({ id: firebaseUserId, email: user.email, name: user.name });
  } catch (error) {
    console.error("로그인 실패", error);
    res.status(500).send({ error: "로그인 실패" });
  }
});

//회원가입
projectApp.post("/signup", async (req, res) => {
  try {
    const { id } = req.body;

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
      phone: req.body.phoneNumber,
    };

    const signupDoc = await db.collection(signupCollection).add(signup);
    res.status(200).send({ result: `회원가입 성공 ${signupDoc.id}` });
  } catch (error) {
    res.status(400).json({ error: "회원가입 실패" }); // JSON 응답
  }
});

//아이디 찾기
projectApp.post("/find-id", async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const existingPhoneNumber = await db
      .collection(signupCollection)
      .where("phone", "==", phoneNumber)
      .get();

    if (existingPhoneNumber.empty) {
      return res
        .status(403)
        .json({ error: "등록된 번호의 아이디가 존재하지 않습니다." });
    }

    const ids = existingPhoneNumber.docs.map((doc) => doc.data().id);

    res.status(200).send({ result: "success", ids });
  } catch (err) {
    console.log(err, "아이디 찾기 에러");
  }
});

//비밀번호 찾기
projectApp.post("/find-pw", async (req, res) => {
  try {
    const { email, phone, name } = req.body;
    const existingEmail = await db
      .collection(signupCollection)
      .where("id", "==", email)
      .get();

    if (existingEmail.empty) {
      return res.status(400).json({ error: "등록된 아이디가 없습니다." });
    }
    const existingPhone = await db
      .collection(signupCollection)
      .where("phone", "==", phone)
      .get();
    if (existingPhone.empty) {
      return res.status(403).json({ error: "등록된 휴대폰번호가 없습니다." });
    }

    const existingName = await db
      .collection(signupCollection)
      .where("name", "==", name)
      .get();
    if (existingName.empty) {
      return res.status(405).json({ error: "등록된 닉네임이 없습니다." });
    }
    const info = existingEmail.docs.map((doc) => doc.data());

    res.status(200).send({ result: "success", info });
  } catch (err) {
    console.log("err", "비밀번호찾기 에러");
  }
});

// 마이페이지 - 리뷰작성
projectApp.post("/review", async (req, res) => {
  try {
    const { userId, storeName, rating, reviewText } = req.body;
    const file = req.files[0];

    const imageBuffer = file.buffer;
    const imageName = `${uuidv4()}_${file.originalname}`;
    const fileStorage = bucket.file(imageName);

    await fileStorage.save(imageBuffer, { contentType: file.mimetype });

    const [imageUrl] = await fileStorage.getSignedUrl({
      action: "read",
      expires: "03-01-2500",
    });

    const reviewData = {
      userId,
      storeName,
      rating: parseInt(rating, 10),
      reviewText,
      imageUrl,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    await db.collection(reviewCollection).add(reviewData);
    res.status(200).send({ result: "Review successfully added" });
  } catch (error) {
    res.status(500).send({ error: "Error adding review" });
  }
});

//모든 리뷰 가져오기
projectApp.get("/reviews/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const reviewSnapshot = await db
      .collection(reviewCollection)
      .where("userId", "==", userId)
      .get();

    const orderSnapshot = await db.collection(orderCollection).get();
    const orders = orderSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const reviews = reviewSnapshot.docs.map((doc) => {
      const reviewData = doc.data();
      const order = orders.find(
        (order) => order.store === reviewData.storeName
      );

      return {
        id: doc.id,
        ...reviewData,
        orderData: order ? order.data : null,
        orderCreatedAt: order ? order.createdAt : null,
      };
    });

    res.status(200).send({ result: "success", reviews });
  } catch (error) {
    console.error("리뷰 가져오기 에러", error);
    res.status(400).send({ error: "리뷰 가져오기 에러" });
  }
});

//리뷰 삭제
projectApp.delete("/review", async (req, res) => {
  try {
    const { userId, storeName } = req.body;
    const reviewSnapshot = await db
      .collection(reviewCollection)
      .where("userId", "==", userId)
      .where("storeName", "==", storeName)
      .get();

    if (reviewSnapshot.empty) {
      return res.status(404).send({ error: "리뷰를 찾을 수 없음" });
    }

    const batch = db.batch();
    reviewSnapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });
    await batch.commit();

    res.status(200).send({
      result: "리뷰 삭제 완료",
    });
  } catch (error) {
    console.error("리뷰 삭제 에러", error);
    res.status(400).send({ error: "리뷰 삭제 에러" });
  }
});

//주문하기
projectApp.post("/order", async (req, res) => {
  try {
    const { userId, store, data } = req.body;

    const orderList = {
      userId, // userId 추가
      store,
      data: data.map((item) => ({
        ...item,
        totalPrice: item.price * item.quantity,
      })),
      createdAt: admin.firestore.FieldValue.serverTimestamp(), // 주문 시간 추가
    };

    await db.collection(orderCollection).add(orderList);
    res.status(200).send({
      result: "주문내역 전송 성공",
    });
  } catch (error) {
    console.error("주문 에러", error);
    res.status(400).send({ error: "주문 에러" });
  }
});

//주문내역
projectApp.get("/order", async (req, res) => {
  try {
    const orderSnapshot = await db.collection(orderCollection).get();

    const orderDoc = orderSnapshot.docs[0];
    const orderData = orderDoc.data();

    const orderList = {
      store: orderData.store,
      data: orderData.data.map((item) => ({
        id: item.id,
        price: item.price,
        totalPrice: item.price * item.quantity,
        quantity: item.quantity,
      })),
    };
    res.status(200).send({ result: "success", ...orderList });
  } catch (error) {
    console.error("주문내역 받아오기 에러", error);
    res.status(400).send({ error: "주문내역 받아오기 에러" });
  }
});

//유저 전체 주문내역
projectApp.get("/orders/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const orderSnapshot = await db
      .collection(orderCollection)
      .where("userId", "==", userId)
      .get();

    if (orderSnapshot.empty) {
      return res.status(200).send({ result: "success", orders: [] });
    }

    const orders = orderSnapshot.docs.map((doc) => {
      const orderData = doc.data();
      return {
        id: doc.id,
        store: orderData.store,
        createdAt: orderData.createdAt,
        data: orderData.data.map((item) => ({
          id: item.id,
          price: item.price,
          totalPrice: item.totalPrice,
          quantity: item.quantity,
        })),
      };
    });

    res.status(200).send({ result: "success", orders });
  } catch (error) {
    console.error("주문내역 받아오기 에러", error);
    res.status(400).send({ error: "주문내역 받아오기 에러" });
  }
});

projectApp.get("/store/:menuId/menu/:storeName", async (req, res) => {
  try {
    const storeMenuDoc = await db
      .collection(storeMenuCollection)
      .doc(req.params.menuId)
      .collection("menu")
      .doc(req.params.storeName)
      .get();

    if (!storeMenuDoc.exists) {
      return res.status(404).send({ error: "문서를 찾을 수 없습니다." });
    }

    res.status(200).send({ result: "success", ...storeMenuDoc.data() });
  } catch (error) {
    console.log("error", error);
    res.status(400).send({ error: "데이터 불러오기 실패" });
  }
});

projectApp.get("/store/:menuId/info/:storeName", async (req, res) => {
  try {
    const storeMenuInfoDoc = await db
      .collection(storeMenuCollection)
      .doc(req.params.menuId)
      .collection("info")
      .doc(req.params.storeName)
      .get();

    res.status(200).send({ result: "success", ...storeMenuInfoDoc.data() });
  } catch (error) {
    console.log("error", error);
    res.status(400).send({ error: "데이터 불러오기 실패" });
  }
});

projectApp.get("/reviews/store/:storeName", async (req, res) => {
  try {
    const { storeName } = req.params;
    const reviewSnapshot = await db
      .collection(reviewCollection)
      .where("storeName", "==", storeName)
      .get();

    const orderSnapshot = await db
      .collection(orderCollection)
      .where("store", "==", storeName)
      .get();

    const orders = orderSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const reviews = reviewSnapshot.docs.map((doc) => {
      const reviewData = doc.data();
      const order = orders.find((order) => order.userId === reviewData.userId);

      return {
        id: doc.id,
        ...reviewData,
        orderData: order ? order.data : null,
        orderCreatedAt: order ? order.createdAt : null,
      };
    });

    res.status(200).send({ result: "success", reviews });
  } catch (error) {
    console.error("리뷰와 주문 데이터 가져오기 에러", error);
    res.status(400).send({ error: "리뷰와 주문 데이터 가져오기 에러" });
  }
});
//장바구니 담기
projectApp.post("/cart", async (req, res) => {
  try {
    const { userId, price, id, storeName } = req.body;
    const cartItem = {
      price,
      id,
      quantity: 1, // 초기 수량 설정
    };

    const userCartDoc = db.collection(cartCollection).doc(userId);
    const userCartSnapshot = await userCartDoc.get();

    if (userCartSnapshot.exists) {
      const existingData = userCartSnapshot.data().data || [];
      const existingStoreName = userCartSnapshot.data().storeName;

      if (existingStoreName !== storeName) {
        // 새로운 storeName이 추가되면 기존 데이터 삭제
        await userCartDoc.set({
          storeName,
          data: [cartItem],
        });
      } else {
        const itemIndex = existingData.findIndex((item) => item.id === id);

        if (itemIndex > -1) {
          existingData[itemIndex].quantity += 1;
        } else {
          existingData.push(cartItem);
        }

        await userCartDoc.update({
          data: existingData,
        });
      }
    } else {
      await userCartDoc.set({
        storeName,
        data: [cartItem],
      });
    }

    res.status(200).send({
      result: "success",
      userId,
      storeName,
      data: (await userCartDoc.get()).data().data,
    });
  } catch (error) {
    console.error("Error adding to cart: ", error);
    res.status(400).send({ error: "카트 추가하기 실패" });
  }
});

// 장바구니 조회
projectApp.get("/cart", async (req, res) => {
  try {
    const userId = req.headers.userid;

    if (!userId) {
      return res.status(400).send({ error: "userId 헤더가 필요합니다." });
    }

    const userCartDoc = await db.collection(cartCollection).doc(userId).get();

    if (!userCartDoc.exists) {
      return res.status(200).send({ result: "success", data: [] });
    }

    const cartData = userCartDoc.data();

    res.status(200).send({
      result: "success",
      userId,
      storeName: cartData.storeName,
      data: cartData.data,
    });
  } catch (error) {
    console.error("Error getting cart: ", error);
    res.status(400).send("카트 불러오기 실패");
  }
});

//
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

//찜한 매장
projectApp.post("/like", async (req, res) => {
  try {
    const { userId, storeName } = req.body;
    const userDoc = await db.collection(signupCollection).doc(userId).get();

    if (!userDoc.exists) {
      return res.status(401).send({ error: "사용자가 존재하지 않습니다." });
    }

    const likeDoc = await db.collection(likeCollection).doc(userId).get();

    if (likeDoc.exists) {
      const existingLikes = likeDoc.data().likes || [];
      if (!existingLikes.includes(storeName)) {
        existingLikes.push(storeName);
        await db
          .collection(likeCollection)
          .doc(userId)
          .update({ likes: existingLikes });
      }
    } else {
      await db
        .collection(likeCollection)
        .doc(userId)
        .set({ likes: [storeName] });
    }

    res.status(200).send({
      result: "찜하기 완료",
    });
  } catch (err) {
    console.error("찜하기 실패", err);
    res.status(500).send({ error: "찜하기 실패" });
  }
});

//찜한 매장 리스트
projectApp.get("/like", async (req, res) => {
  try {
    const userId = req.headers.userid;

    if (!userId) {
      return res.status(400).send({ error: "userId 헤더가 필요합니다." });
    }

    const likeDoc = await db.collection(likeCollection).doc(userId).get();

    if (!likeDoc.exists) {
      return res.status(200).send({ result: "success", data: [] });
    }

    const likesData = likeDoc.data().likes || [];

    const formattedLikes = likesData.map((storeName) => ({ storeName }));

    res.status(200).send({
      result: "success",
      userId,
      data: formattedLikes,
    });
  } catch (error) {
    console.error("Error getting likes: ", error);
    res.status(400).send("찜하기 목록 불러오기 실패");
  }
});

//찜한 매장 삭제
projectApp.delete("/like", async (req, res) => {
  try {
    const { userId, storeName } = req.body;
    const userDoc = await db.collection(signupCollection).doc(userId).get();

    if (!userDoc.exists) {
      return res.status(401).send({ error: "사용자가 존재하지 않습니다." });
    }

    const likeDoc = await db.collection(likeCollection).doc(userId).get();

    if (likeDoc.exists) {
      const existingLikes = likeDoc.data().likes || [];
      const updatedLikes = existingLikes.filter((like) => like !== storeName);

      await db
        .collection(likeCollection)
        .doc(userId)
        .update({ likes: updatedLikes });

      res.status(200).send({
        result: "찜하기 삭제 완료",
      });
    } else {
      res.status(404).send({ error: "찜한 항목이 없습니다." });
    }
  } catch (err) {
    console.error("찜하기 삭제 실패", err);
    res.status(500).send({ error: "찜하기 삭제 실패" });
  }
});

//나와가까운 매장(지도)
projectApp.get("/nearby-locations", async (req, res) => {
  try {
    const fixedLatitude = 37.5665;
    const fixedLongitude = 126.978;

    const data = [];

    const stores = [
      { store: "까치붕어빵", star: 1, index: 1 },
      { store: "미담분식", star: 3, index: 2 },
      { store: "일본식다코야끼", star: 4, index: 5 },
      { store: "호떡호떡", star: 2, index: 4 },
    ];

    for (let i = 0; i < stores.length; i++) {
      const randomLat = fixedLatitude + (Math.random() - 0.5) * 0.01;
      const randomLng = fixedLongitude + (Math.random() - 0.5) * 0.01;
      data.push({
        lat: randomLat,
        lng: randomLng,
        store: stores[i].store,
        star: stores[i].star,
        index: stores[i].index,
      });
    }

    res.status(200).json({ result: "success", data });
  } catch (error) {
    console.error("Error generating locations: ", error);
    res.status(500).send({ error: "Error generating locations" });
  }
});

app.use("/api", projectApp);

exports.projectAPI = functions
  .region("asia-northeast3")
  .runWith({
    memory: "2GB",
    timeoutSeconds: 120,
  })
  .https.onRequest(app);
