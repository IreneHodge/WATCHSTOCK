const axios = require("axios");
const express = require("express");
import { Request, Response } from "express";
const router = express.Router();
const mongoose = require("mongoose");
const db = require("../../models/companyStock");
import { CompanyData } from "../../interfaces";

router
  .get("/", (req: Request, res: Response) => {
    db.getWatchlist((err: Error, result: [Object]) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  })
  .post("/", async (req: Request, res: Response) => {
    const company: CompanyData = req.body.params.companyData;
    db.addCompany(company, (err: Error, result: any) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).send("Successfully added company to Watchlist");
      }
    });
  })

  .delete("/", (req: Request, res: Response) => {
    let symbol = req.query.symbol;
    db.deleteCompany(symbol, (err: Error, result: any) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(202).send("Successfully deleted from Watchlist");
      }
    });
  });

module.exports = router;
