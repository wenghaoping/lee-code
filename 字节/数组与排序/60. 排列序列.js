/**
 * 60.排列序列
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = (n, k) => {
    let count = 0;
    const used = new Set();
    const helper = (temp) => {
        if (temp.length === n) {   // 选齐了 生成了一个排列
            count++;            
            if (count === k) {       // 正好是第k个
                return temp.join(''); // 拼成字符串，返回出来
            }
            return;                 // 结束当前递归，考察别的选择
        }
        for (let i = 1; i <= n; i++) { // 枚举出所有选择
            if (used.has(i)) continue;   // 已经选过，跳过
            temp.push(i);                // 选择
            used.add(i);
            const res = helper(temp);    // 递归 往下选，获取返回值
            temp.pop();                  // 撤销选择
            used.delete(i);
            if (res) {                   // 有返回值，说明找到了，返回res，结束掉遍历
                return res; 
            }
        }
    };
    return helper([]);
};

const getPermutation = (n, k) => { // 以 n=4 k=10 为例
    const nums = [];
    let factorial = 1;               // 阶乘  
    for (let i = 1; i <= n; i++) {
        nums.push(i);                  // [1, 2, 3, 4]
        factorial = factorial * i;     // 4!   24
    }
    k--;     // nums中数字们的索引是从0开始，k要先减去1
    let resStr = '';
    while (nums.length > 0) {              // 选了一个数字就删掉，直到为空
        factorial = factorial / nums.length; //  3! .. 2! .. 1!
        const index = k / factorial | 0;     // 当前选择的数字的索引，获得除数
        resStr += nums[index];               // 加上当前选的数字
        nums.splice(index, 1);               // nums删去选的这个数字
        k = k % factorial;                   // 更新 k，取余数
    }
    return resStr;
};
console.log(getPermutation2(4, 10))
// 给出集合 [1,2,3,...,n]，其所有元素共有 n! 种排列。
// 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// 给定 n 和 k，返回第 k 个排列。

// 示例 1：
// 输入：n = 3, k = 3
// 输出："213"

// 示例 2：
// 输入：n = 4, k = 9
// 输出："2314"

// 示例 3：
// 输入：n = 3, k = 1
// 输出："123"