const finnhub = require('finnhub');
require('dotenv').config();

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.STOCK_API;
const finnhubClient = new finnhub.DefaultApi();

function updateStocks() {
    finnhubClient.quote('AAPL', (error, data, res) => {
        console.log(data.dp);
    });
}

updateStocks();