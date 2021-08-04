const axios = require("axios");
const express = require("express");
import { Request, Response } from "express";
const router = express.Router();

router.route("/");
// .get((request: Request, response: Response) =>
//   response.send("Server Working").status(200).end()
// );

router.route("/search").get((req: Request, res: Response) => {
  const ticker = req.body;
  const date = new Date().toISOString().split("T")[0];
  let config = {
    method: "get",
    url: `https://api.polygon.io/v1/meta/symbols/${ticker}/company?&apiKey=ZAohpRBH_LazecH1c_xSIMTmhCMdyTls`,
    headers: {},
  };

  let config2 = {
    method: "get",
    url: `https://api.polygon.io/v1/open-close/${ticker}/${date}?adjusted=true&apiKey=ZAohpRBH_LazecH1c_xSIMTmhCMdyTls`,
    headers: {},
  };

  axios(config)
    .then((res: any) => {
      console.log(JSON.stringify(res.data));
    })
    .catch((err: Error) => {
      console.log(err);
    });

  axios(config2)
    .then((res2: any) => {
      console.log(JSON.stringify(res2.data));
    })
    .catch((err2: Error) => {
      console.log(err2);
    });
});

module.exports = router;
