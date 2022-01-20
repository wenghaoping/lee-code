/**
 * 438. 找到字符串中所有字母异位词
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
//  needs和window相当于计数器，
// 分别记录T中字符出现次数和「窗口」中的相应字符的出现次数。
var findAnagrams = function(s2, s1) {
    let need = {};
    let window = {};
    for (let s of s1) {
        need[s] = need[s] ? need[s] + 1 : 1;
        window[s] = 0;
    }
    let left = 0;
    let right = 0;
    let valid = 0;
    const res = [];
    while (right < s2.length) {
        // c 是将移入窗口的字符
        let c = s2[right];
        // 右移窗口
        right++;
        // 进行窗口内数据的一系列更新
        /*** debug 输出的位置 ***/
        if (need[c]) {
            window[c]++;
            if (window[c] === need[c]) {
                valid++;
            }     
        }
        // 判断左侧窗口是否要收缩，前提是right已经到达s1长度之后的长度了。
        while (right - left >= s1.length) {
            // 在这里判断是否找到了合法的子串
            if (valid == Object.keys(need).length) {
                res.push(left);
            }
            let d = s2[left];
            // 左移窗口
            left++;
            // 进行窗口内数据的一系列更新
            if (need[d]) {
                // 左移窗口，需要重新计算，所以需要减少相似。
                if (window[d] === need[d]) {
                    valid--;
                }
                window[d]--;
            }
        }
    }
    // 未找到符合条件的子串
    return res;
};
console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
// 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
// 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

// 说明：
// 字母异位词指字母相同，但排列不同的字符串。
// 不考虑答案输出的顺序。

// 示例 1:
// 输入:
// s: "cbaebabacd" p: "abc"
// 输出:
// [0, 6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。

//  示例 2:
// 输入:
// s: "abab" p: "ab"
// 输出:
// [0, 1, 2]

// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。