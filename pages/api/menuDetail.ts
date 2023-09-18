import { NextApiRequest, NextApiResponse } from "next";
import { readFileSync } from "fs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const menuDetailBuffer = readFileSync("/types/api/detail_mockData.json");
      const menuDetailString = menuDetailBuffer.toString();
      if (!menuDetailString) {
        res.statusCode = 200;
        res.send([]);
      }
      const menuDetail = JSON.parse(menuDetailString);
      res.statusCode = 200;
      return res.send(menuDetail);
    } catch (error) {
      console.log("error", error);
      res.statusCode = 500;
      res.send(error);
    }
  }
};
