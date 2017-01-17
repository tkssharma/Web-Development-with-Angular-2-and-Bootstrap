
function getStock(){
    return {
        symbol: "IBM",
        price: 100.00
    };
}
let {symbol, price} = getStock();
console.log(`The price of ${symbol} is ${price}`);
// example 02
let msft = {symbol: "MSFT",
  lastPrice: 50.00,
  exchange: {
    name: "NASDAQ",
    tradingHours: "9:30am-4pm"
   }
};
function printStockInfo(msft){
    let {symbol, exchange:{name}} = stock;
    console.log(`The ${symbol} stock is traded at ${name}`);
}
printStockInfo(msft);