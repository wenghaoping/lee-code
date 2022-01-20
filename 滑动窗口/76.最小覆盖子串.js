/**
 * 76.最小覆盖子串
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // 新建双指针，r 和 l。新建 map 字典。res 用来存放最终结果。
    let l = 0
    let r = 0
    const map = new Map();
    let res = '';
    // 用 t 中的字符 组建字典。key 为 字符，value 为 字符个数。
    for(let c of t) {
        map.set(c, map.has(c) ? map.get(c) + 1 : 1)
    }
    let mapType = map.size;
    // 用右指针 r 遍历 s ，如果右指针所指的字符 字典中有，那么字典中该字符的 value 值减一。如果该字符 value 等于 0 了，那么字典中字符的种类就 减一。
    while(r < s.length) {
        const c = s[r];
        if(map.has(c)) {
            map.set(c, map.get(c) - 1)
            if(map.get(c) === 0) {
                mapType -= 1;
            }
        }
        // 如果 map 中字符种类等于 0 了。说明当前左右指针所包含的字符串 含有 map 中的所有字符。那么，记录下此时子串的长度
        while(mapType === 0) {
            const newRes = s.substring(l, r + 1);
            // 如果 res 不存在，则 res 为当前子串长度。若 res 存在，比较当前子串与 res 长度，将短的那个子串复制给 res。
            if(!res || newRes.length < res.length) {
                res = newRes
            }
            // （尝试减小子串长度）左指针右移，移动过程中如果左指针指向的值为字典中的值，那就证明匹配的值少了一个。
            // 因此，更新 map 中 value 的值。若当前值新增到字典中后，value 次数为1，
            // 证明这是不同种类的字符，因此，map 的字符种类也要加 1
            const c2 = s[l];
            if(map.has(c2)) {
                map.set(c2, map.get(c2) + 1)
                if(map.get(c2) === 1) mapType += 1
            }
            l += 1
        }
        r += 1
    }
    // 返回最小的子串长度
    return res
};
console.log(minWindow("ADOBECODEBANC", "ABC"));
// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
// 注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。

// 示例 1：
// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"

// 示例 2：
// 输入：s = "a", t = "a"
// 输出："a"

// 提示：
// 1 <= s.length, t.length <= 105
// s 和 t 由英文字母组成