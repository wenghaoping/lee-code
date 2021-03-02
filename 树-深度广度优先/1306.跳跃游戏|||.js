/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
// 1306.跳跃游戏|||
// 广度优先
function canReach(arr, start) {
    let haveSearchIndex = {}; // 已经查找过的
    let waitSearchIndex = []; // 等待查找的
    waitSearchIndex.push(start); // 初始值
    while (waitSearchIndex.length > 0) {
        let index = waitSearchIndex.shift(); // 拿出第一个值。
        if (arr[index] === 0) return true; // 成立条件。
        haveSearchIndex[index] = 1; // 唯一值。
        let left = index + arr[index];
        let right = index - arr[index];
        // 大于等于0，比数组长度小，而且不在已经查找过的范围内，
        // 因为已经查找过的，再次查找，等于陷入了死循环。
        if (left >= 0 && left < arr.length && !haveSearchIndex[left]) { 
            waitSearchIndex.push(left);
        };
        if (right >= 0 && right < arr.length && !haveSearchIndex[right]) {
            waitSearchIndex.push(right);
        };
    }
    return false;
};
// 深度优先
function canReach2(arr, start) {
    function dfs(arr, start, step) {
        // 直接排除错误的 start
        if (start < 0 || start >= arr.length) return false;
        // 如果次数等于了数组的长度，那说明肯定不肯到达目的地，
        if (step === arr.length) return false;
        // 达成目标
        if (arr[start] === 0) return true;
        // （数组再次循环，把对应的start丢入，
        return dfs(arr, start - arr[start], step + 1) || dfs(arr, start + arr[start], step + 1)
    }
    return dfs(arr, start, 0);
}
// dfs（或者说是递归吧），对于存在循环跳的这个坑，由于刚好之前遇到过类似的题，
// 很容易想到，就是记录跳跃的次数，
// 如果次数等于了数组的长度，那说明肯定不肯到达目的地，
// 所以我们只需要比较跳跃次数和数组长度即可。

console.log(canReach([4,2,3,0,3,1,2], 5)); // true
console.log(canReach2([4,2,3,0,3,1,2], 0)); // true 
console.log(canReach2([3,0,2,1,2], 2)); // false 
console.log(canReach2([4,4,1,3,0,3], 2));// true 
// 这里有一个非负整数数组 arr，你最开始位于该数组的起始下标 start 处。当你位于下标 i 处时，你可以跳到 i + arr[i] 或者 i - arr[i]。

// 请你判断自己是否能够跳到对应元素值为 0 的 任一 下标处。

// 注意，不管是什么情况下，你都无法跳到数组之外。

//  

// 示例 1：

// 输入：arr = [4,2,3,0,3,1,2], start = 5
// 输出：true
// 解释：
// 到达值为 0 的下标 3 有以下可能方案： 
// 下标 5 -> 下标 4 -> 下标 1 -> 下标 3 
// 下标 5 -> 下标 6 -> 下标 4 -> 下标 1 -> 下标 3 
// 示例 2：

// 输入：arr = [4,2,3,0,3,1,2], start = 0
// 输出：true 
// 解释：
// 到达值为 0 的下标 3 有以下可能方案： 
// 下标 0 -> 下标 4 -> 下标 1 -> 下标 3
// 示例 3：

// 输入：arr = [3,0,2,1,2], start = 2
// 输出：false
// 解释：无法到达值为 0 的下标 1 处。 
//  

// 提示：

// 1 <= arr.length <= 5 * 10^4
// 0 <= arr[i] < arr.length
// 0 <= start < arr.length