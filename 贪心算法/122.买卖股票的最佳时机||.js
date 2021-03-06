/**
 * @param {number[]} prices
 * @return {number}
 */
// 采用贪心算法，如果当天股票的价格 pi 大于等于前一天的股票价格 pi-1 则持续持有。
// 如果低于前一天的价格，则在前一天就抛售股票。
var maxProfit = function(prices) {
    let buyin = 0;
    let keep = 1;
    let profit = 0;
    let len = prices.length;
        while(buyin + keep < len) {
            let buyP = prices[buyin];
            for(keep; keep < (len - buyin); keep++) {
                if(prices[buyin + keep - 1] > prices[ buyin + keep]) {
                    if(keep > 1) {
                        profit = profit + (prices[buyin + keep - 1] - buyP);
                    }
                    break;
                } else {
                    if(buyin + keep + 1 == len) {
                        profit = profit + (prices[buyin + keep] - buyP);
                    }
                }
            }
            buyin = buyin+keep;
            keep = 1;
        }
        return profit;
};

// 每一天都盯盘，只要当天利润P＞0，买卖股票，利润增加。如果当天利润P≤0，不进行操作。
var maxProfit2 = function(prices) {
    let totalProfite = 0;
    for (let i = 1; i < prices.length; i++){
        if (prices[i - 1] < prices[i]) {
            totalProfite += (prices[i] - prices[i-1]);
        }
    }
    return totalProfite;
};
var maxProfit4 = function(prices) {
    let ans = 0;
    for (let i = 1; i < prices.length;; ++i) {
        ans += Math.max(0, prices[i] - prices[i - 1]);
    }
    return ans;
};

// 动态规划
var maxProfit3 = function(prices) {
    const n = prices.length;
    const dp = new Array(n).fill(0).map(v => new Array(2).fill(0));
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for (let i = 1; i < n; ++i) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return dp[n - 1][0];
};
console.log(maxProfit3([7,1,5,3,6,4]));
console.log(maxProfit3([1,2,3,4,5]));
console.log(maxProfit3([7,6,4,3,1]));
// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
//  
// 示例 1:

// 输入: [7,1,5,3,6,4]
// 输出: 7
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
//      随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
// 示例 2:

// 输入: [1,2,3,4,5]
// 输出: 4
// 解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
//      注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
//      因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
// 示例 3:

// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 

// 提示：

// 1 <= prices.length <= 3 * 10 ^ 4
// 0 <= prices[i] <= 10 ^ 4