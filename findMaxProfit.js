var maxProfit = function(prices){
    let minBuyPrice = Infinity;
    let maxProfit = 0;

    if(!prices || prices.length === 0){
        return maxProfit
    }

    for (let price of prices){
        if(price < minBuyPrice){
            minBuyPrice = price
        }
        else if(price - minBuyPrice > maxProfit){
            maxProfit = price - minBuyPrice
        }
    }
    return maxProfit
}

const result = maxProfit([7,1,5,3,6,4]);

console.log(result)