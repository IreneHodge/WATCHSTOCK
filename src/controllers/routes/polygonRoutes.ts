const axios = require("axios");
const express = require("express");
import { Request, Response } from "express";
const router = express.Router();

require("dotenv").config();
const TOKEN = process.env.TOKEN;

interface CompanyData {
  logo: String;
  ceo: String;
  url: String;
  description: String;
  exchange: String;
  name: String;
  symbol: String;
  similar: String[];
  open: Number;
  high: Number;
  low: Number;
  close: Number;
}

router.route("/").get((req: Request, res: Response) => {
  const ticker = req.query.search;
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const date = yesterday.toISOString().split("T")[0];

  let config = {
    method: "get",
    url: `https://api.polygon.io/v1/meta/symbols/${ticker}/company?&apiKey=${TOKEN}`,
    headers: {},
  };
  let config2 = {
    method: "get",
    url: `https://api.polygon.io/v1/open-close/${ticker}/${date}?adjusted=true&apiKey=${TOKEN}`,
    headers: {},
  };

  axios(config)
    .then((results: any) => {
      let data = results.data;

      axios(config2)
        .then((results2: any) => {
          let data2 = results2.data;
          const companyData: CompanyData = {
            logo: data.logo,
            ceo: data.ceo,
            url: data.url,
            description: data.url,
            exchange: data.exchange,
            name: data.name,
            symbol: data.symbol,
            similar: data.similar,
            open: data2.open,
            high: data2.high,
            low: data2.low,
            close: data2.close,
          };

          res.status(200).send(companyData);
          console.log(companyData);
        })
        .catch((err2: Error) => {
          // res.status(404).send("INVALID TICKER");
          console.log(`This is error 2: ${err2}`);
        });
    })
    .catch((err: Error) => {
      // res.status(404).send("INVALID TICKER");
      console.log(`This is error 1: ${err}`);
    });
});

module.exports = router;
