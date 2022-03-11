const finnhub = require('finnhub');
require('dotenv').config();

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.STOCK_API;
const finnhubClient = new finnhub.DefaultApi();

function updateStocks(symbol, cb) {
    finnhubClient.quote(symbol, (error, data, res) => {
        //console.log(data.dp);
        //return data.dp
        cb(data.c, data.dp);
    });
}

// test to check if the data is getting pulled
/*updateStocks('AAPL', (current, change) => {
    console.log(current, change);
});*/ 


module.exports = updateStocks;