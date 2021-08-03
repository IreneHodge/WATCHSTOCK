import express, { Request, Response } from "express";

const router = express.Router();

router
  .route("/")
  .get((request: Request, response: Response) =>
    response.send("Server Working").status(200).end()
  );

module.exports = router;
