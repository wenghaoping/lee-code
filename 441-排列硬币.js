// 你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let i = 0;
    while (n > 0) {
        i++;
        n = n - i;
    }
    if (n < 0) {
        i = i - 1;
    }
    return i;
};
var arrangeCoins2 = function(n) {
    let left = 0;
    let right = n; // 2 + 1
    while(left <= right) {
        let mid = (left + right); // 2
        console.log(`left_right-${left}-${right}-${mid}`);
        let totle = 0.5 * mid * (1 + mid); // 等差数列求和公式0.5 * (n) * (1 + n)
        console.log(`totle-${totle}`);
        if (totle > n) {
            right = mid - 1;
        } else if (totle < n){
            left = mid + 1;
        } else {
            return mid;
        };
    }
    return right
};
    // 重点解释一下第三行和第四行，
    // 在第三行中，左右的边界值都更新为3，此时mid的值只能取3；
    // 我们计算出搭建3层完整的阶梯需要6枚硬币，低于给定的8枚，
    // 因此左边界left会更新为4，此时循环条件被破坏，因此，最后返回的是right。
    console.timeEnd();
// arrangeCoins(8);
arrangeCoins2(8);
// console.log(arrangeCoins(100));
// console.log(arrangeCoins2(100));


// 给定一个数字 n，找出可形成完整阶梯行的总行数。

// n 是一个非负整数，并且在32位有符号整型的范围内。

// 示例 1:

// n = 5

// 硬币可排列成以下几行:
// ¤
// ¤ ¤
// ¤ ¤

// 因为第三行不完整，所以返回2.
// 示例 2:

// n = 8

// 硬币可排列成以下几行:
// ¤
// ¤ ¤
// ¤ ¤ ¤
// ¤ ¤

// 因为第四行不完整，所以返回3.