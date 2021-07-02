/**1013. 将数组分成和相等的三个部分
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let sum = arr.reduce((prev, cur) => prev + cur);
    if(sum % 3 != 0) {
        return false;
    }
    let target = sum / 3;
    let n = arr.length;
    let i = 0;
    let cur = 0;
    while (i < n) {
        cur += arr[i];
        if (cur === target) {
            break;
        }
        i++;
    }
    if (cur != target) {
        return false;
    }
    let j = i + 1;
    // 需要满足最后一个数组非空
    while (j + 1 < n) {
        cur += arr[j];
        if (cur == target * 2) {
            return true;
        }
        j++;
    }
    return false;
};
console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]));
console.log(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1]));
// 给你一个整数数组 arr，只有可以将其划分为三个和相等的 非空 部分时才返回 true，否则返回 false。
// 形式上，如果可以找出索引 i + 1 < j 且满足 
// (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1]) 
// 就可以将数组三等分。

// 示例 1：
// 输入：arr = [0,2,1,-6,6,-7,9,1,2,0,1]
// 输出：true
// 解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1

// 示例 2：
// 输入：arr = [0,2,1,-6,6,7,9,-1,2,0,1]
// 输出：false

// 示例 3：

// 输入：arr = [3,3,6,5,-2,2,5,1,-9,4]
// 输出：true
// 解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4



// 我们将数组 A 中的所有数的和记为 sum(A)。根据题目我们可以得知，每一个非空部分的和都应当是 sum(A) / 3。因此我们需要找到索引 i 和 j 使得：

// A[0] + A[1] + ... + A[i] = sum(A) / 3;
// A[i + 1] + A[i + 2] + ... + A[j] = sum(A) / 3。这等价于 A[0] + A[1] + ... + A[j] = sum(A) / 3 * 2 且 j > i。

// 首先我们需要找出索引 i。具体地，我们从第一个元素开始遍历数组 A 并对数组中的数进行累加。当累加的和等于 sum(A) / 3 时，我们就将当前的位置置为索引 i。
// 由于数组中的数有正有负，我们可能会得到若干个索引 i0, i1, i2, ...，从 A[0] 到这些索引的数之和均为 sum(A) / 3。
// 那么我们应该选取那个索引呢？直觉告诉我们，应该贪心地选择最小的那个索引 i0，
// 这也是可以证明的：假设最终的答案中我们选取了某个不为 i0 的索引 ik 以及另一个索引 j，那么根据上面的两条要求，有：

// A[0] + A[1] + ... + A[ik] = sum(A) / 3;
// A[0] + A[1] + ... + A[j] = sum(A) / 3 * 2 且 j > ik。

// 然而 i0 也是满足第一条要求的一个索引，因为 A[0] + A[1] + ... + A[i0] = sum(A) / 3 并且 j > ik > i0，我们可以将 ik 替换为 i0，因此选择最小的那个索引是合理的。

// 在选择了 i0 作为 i 之后，我们从 i0 + 1 开始继续遍历数组 A 并进行累加，当累加的和等于 sum(A) / 3 * 2 时，我们就得到了索引 j，可以返回 true 作为答案。
// 如果我们无法找到索引 i 或索引 j，或者 sum(A) 本身无法被 3 整数，那么我们返回 false。