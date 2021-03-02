/**
 * @param {number[]} answers
 * @return {number}
 */
// 781.森林中的兔子
var numRabbits = function(answers) {
    let map = new Map();
    let res = 0;
    for (let ans of answers) {
        // 报0的兔子一定是独一无二的直接++
        if (ans === 0) {
            res++;
        } else if (!map.has(ans)) {
            // 如果是之前没有报过的数，
            // 那么就算上他报的数字再加上他自己+1
            res += (1 + ans);
            map.set(ans, ans);
        } else {
            // 如果是已经报过了的。
            // 因为是之前报过的数字，可能和之前是同一个颜色，而且之前已经把他算上了
            // 所以就减1
            // 如果减掉之后，就是0了，说明他就是和之前的那个人一样的了。
            map.set(ans, map.get(ans) - 1);
            if (map.get(ans) === 0) {
                map.delete(ans);
            }
        }
    }
    return res;
};
console.log(numRabbits([1, 1, 2]));
console.log(numRabbits([10, 10, 10]));
console.log(numRabbits([]));
// 要想使得兔子数量最小，那么尽量将报同样数量的视为同一颜色，
// 但为了不矛盾，需要使用map记录对应颜色兔子最大的出现次数
// 报0的兔子一定是独一无二的直接++
// 森林中，每个兔子都有颜色。其中一些兔子（可能是全部）告诉你还有多少其他的兔子和自己有相同的颜色。我们将这些回答放在 answers 数组里。

// 返回森林中兔子的最少数量。

// 示例:
// 输入: answers = [1, 1, 2]
// 输出: 5
// 解释:
// 两只回答了 "1" 的兔子可能有相同的颜色，设为红色。
// 之后回答了 "2" 的兔子不会是红色，否则他们的回答会相互矛盾。
// 设回答了 "2" 的兔子为蓝色。
// 此外，森林中还应有另外 2 只蓝色兔子的回答没有包含在数组中。
// 因此森林中兔子的最少数量是 5: 3 只回答的和 2 只没有回答的。

// 输入: answers = [10, 10, 10]
// 输出: 11

// 输入: answers = []
// 输出: 0
// 说明:

// answers 的长度最大为1000。
// answers[i] 是在 [0, 999] 范围内的整数。
