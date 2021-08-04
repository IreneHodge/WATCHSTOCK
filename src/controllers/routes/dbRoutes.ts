const axios = require("axios");
const express = require("express");
import { Request, Response } from "express";
const router = express.Router();

router
  .get("/", (req: Request, res: Response) => {})
  .post("/", (req: Request, res: Response) => {})
  .delete("/", (req: Request, res: Response) => {});

module.exports = router;
