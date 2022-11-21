const finnhub = require("finnhub");
const { Stock } = require("../models");
require("dotenv").config();

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "c8l5e22ad3icvur3nj00";

// console.log(process.env.STOCK_API);

const finnhubClient = new finnhub.DefaultApi();

let stockArray = [
  {
    id: 0,
    name: "Paypal",
    symbol: "PYPL",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 1,
    name: "Apple",
    symbol: "AAPL",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 2,
    name: "Tesla",
    symbol: "TSLA",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 3,
    name: "eBay",
    symbol: "EBAY",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 4,
    name: "UWM Holdings Corp.",
    symbol: "UWMC",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 5,
    name: "United States Steel Corp.",
    symbol: "X",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 6,
    name: "Best Buy Co Inc",
    symbol: "BBY",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 7,
    name: "Microsoft Corporation",
    symbol: "MSFT",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 8,
    name: "Sony",
    symbol: "SONY",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 9,
    name: "Nintendo",
    symbol: "NTDOY",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 10,
    name: "GameStop",
    symbol: "GME",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 11,
    name: "Lockheed Martin",
    symbol: "LMT",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 12,
    name: "Raytheon",
    symbol: "RTX",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 13,
    name: "Northrop Grumman",
    symbol: "NOC",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 14,
    name: "CACI International Inc.",
    symbol: "CACI",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 41,
    name: "Moderna",
    symbol: "MRNA",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 42,
    name: "Pfizer Inc.",
    symbol: "PFE",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 43,
    name: "Johnson & Johnson",
    symbol: "JNJ",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 44,
    name: "BioNTech",
    symbol: "BNTX",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 45,
    name: "AstraZeneca",
    symbol: "AZN",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 46,
    name: "Novavax",
    symbol: "NVAX",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 61,
    name: "Eli Lilly and Co.",
    symbol: "LLY",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 62,
    name: "Novo Nordisk A/S",
    symbol: "NVO",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 63,
    name: "Merck & Co Inc",
    symbol: "MRK",
    quote: 0,
    percentChange: 0,
  },
  {
    id: 64,
    name: "Bayer",
    symbol: "BAYRY",
    quote: 0,
    percentChange: 0,
  },
];

updatedStocks = [];

function updateStocks() {


  // finnhubClient.quote("AAPL", (error, data, response) => {
  //   console.log(data);
  // }) 

  stockArray.forEach((element) => {
    finnhubClient.quote(element.symbol, (error, data, response) => {
      let tmpStock = [];

      console.log(data);

      tmpStock.id = element.id;
      tmpStock.name = element.name;
      tmpStock.symbol = element.symbol;
      tmpStock.quote = data.c;
      tmpStock.percentChange = data.dp;

      updatedStocks.push(tmpStock);
      console.log(updatedStocks);
        Stock.create([
          {
            id: element.id,
            name: element.name,
            symbol: element.symbol,
            quote: data.c,
            percentChange: data.dp,
          },
        ]);
    });
  });
}
updateStocks();

//console.log(updatedStocks);

module.exports = updateStocks;
