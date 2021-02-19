
var missingNumber = function(nums) {
    nums.sort();
    let left = 0;
    let right = nums.length;
    while(left < right) {
        let middleNumber = Math.floor(left + (right - left) / 2);
        if (middleNumber < nums[middleNumber]) {
            right = middleNumber;
        } else {
            left = middleNumber + 1
        }
    }
    return right;
}
// 利用等差数列
var missingNumber2 = function(nums) {
    const n = nums.length;
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum = sum + nums[i] ;
    }
    console.log(sum);
    return 0.5 * n * (n + 1) - sum;
}
var missingNumber3 = function(nums) {
    let left = 0;
    let right = nums.length;
    missing(left, right);
    function missing(left, right) {
        console.log(left, right);
        if (left < right) {
            let middleNumber = Math.floor(left + (right - left) / 2);
            if (middleNumber < nums[middleNumber]) {
                missing(left, middleNumber);
                // right = middleNumber;
            } else {
                missing(middleNumber + 1, right);
                // left = middleNumber + 1
            }
        } else {
            return right
        }
    }
}

console.log(missingNumber3([0, 1, 2, 3, 4, 6, 7, 8, 9]));
// console.log(missingNumber3([0, 2, 3, 4, 5]));
// console.log(missingNumber3([0, 1, 3]));
// console.log(missingNumber([0, 1]));
// console.log(missingNumber([1, 2]));


// 问题描述：给定一个有n个不同数字，是0-n，其中有一个数字是缺少的，找出这个数字，最好是线性的时间结构，不使用额外的内存空间
// 思路1.算出这n个数字之和，与0-n这n+1个数字之和进行比较，缺少的数字就是2个数字之差
// 思路2.对数组进行排序，然后使用二分法进行查找
// 思路3.首先我们知道，n^m^n = m  那么，(0^1^2^3...^n)  ^ (0^1^2^3...^n) 前半部分为0-n的n+1个数字，后半部分为题中给出的数组，这样就可以求出那个单独的数字

// 输入: [0, 1, 2, 3, 4, 5, 6, 7, 9];
// 输出: 8

// 输入:[0, 1, 3]
// 输出: 2