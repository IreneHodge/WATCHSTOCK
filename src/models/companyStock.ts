import mongoose from "mongoose";
import { CompanyData } from "../interfaces";

mongoose.connect("mongodb://localhost:27017/watchlist");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database is connected");
});

const companyStockSchema = new mongoose.Schema({
  logo: {
    type: String,
    required: false,
    trim: true,
  },
  ceo: {
    type: String,
    required: false,
    trim: true,
  },
  url: {
    type: String,
    required: false,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  exchange: {
    type: String,
    required: false,
    trim: true,
  },
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  symbol: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  similar: {
    type: [String],
    required: false,
    trim: true,
  },
  open: {
    type: Number,
    required: true,
  },
  close: {
    type: Number,
    required: true,
  },
  high: {
    type: Number,
    required: true,
  },
  low: {
    type: Number,
    required: true,
  },
});

const CompanyStock = mongoose.model("companyStocks", companyStockSchema);

const getWatchlist: Function = (cb: Function) => {
  CompanyStock.find().exec((err: Error, results: [Object]) => {
    cb(err, results);
  });
};

const deleteCompany: Function = (symbol: String, cb: Function) => {
  CompanyStock.remove({ symbol: symbol }).exec(
    (err: Error, results: String) => {
      cb(err, results);
    }
  );
};

const addCompany: Function = (company: CompanyData, cb: Function) => {
  CompanyStock.create(company, (error: Error, result: any) => {
    cb(error, result);
  });
};

module.exports = {
  CompanyStock,
  getWatchlist,
  deleteCompany,
  addCompany,
};
