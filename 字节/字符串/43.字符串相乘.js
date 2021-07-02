/**
 * 字符串相乘
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0'
    }
    const l1 = num1.length;
    const l2 = num2.length;
    const p = new Array(l1 + l2).fill(0);
    for (let i = l1; i--;) {
        for (let j = l2; j--;) {
            let tmp = num1[i] * num2[j] + p[i + j + 1];
            p[i + j + 1] = tmp % 10;
            p[i + j] += 0 | tmp / 10;
        } 
    }
    while(p[0] === 0) {
        p.shift();
    }
    return p.join('')
};




var multiply2 = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    let l1 = num1.length;
    let l2 = num2.length;
    // 创建足够长度的数组
    const arr = new Array(l1 + l2).fill(0);
    // 反向循环
    for (let i = l1 - 1; i >= 0 ; i--) {
        for (let j = l2 - 1; j >= 0; j--) {
            // 相乘想加
            let product = num1[i] * num2[j] + arr[i + j + 1];
            // 取余数
            arr[i + j + 1] = product % 10;
            // 取十位
            arr[i + j] = arr[i + j] + Number.parseInt(product / 10);
        }
    }
    // 0开头的剔除
    while(arr[0] === 0) {
        arr.shift();
    } 
    return arr.join('')
}
console.log(multiply2('2', '3'));
console.log(multiply2('123', '456'));
console.log(multiply2("123456789", '987654321'));
// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 示例 1:
// 输入: num1 = "2", num2 = "3"
// 输出: "6"

// 示例 2:
// 输入: num1 = "123", num2 = "456"
// 输出: "56088"

// 说明：
// num1 和 num2 的长度小于110。
// num1 和 num2 只包含数字 0-9。
// num1 和 num2 均不以零开头，除非是数字 0 本身。
// 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。