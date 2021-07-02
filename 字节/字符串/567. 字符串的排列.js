/**
 * 567. 字符串的排列
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 方法一：滑动窗口
var checkInclusion = function(s1, s2) {
    const n = s1.length;
    const m = s2.length;
    if (n > m) {
        return false;
    }
    // 新建两个26位字母的数组
    const cnt1 = new Array(26).fill(0);
    const cnt2 = new Array(26).fill(0);
    for (let i = 0; i < n; ++i) {
        ++cnt1[s1[i].charCodeAt() - 'a'.charCodeAt()];
        ++cnt2[s2[i].charCodeAt() - 'a'.charCodeAt()];
    }
    if (cnt1.toString() === cnt2.toString()) {
        return true;
    }
    for (let i = n; i < m; ++i) {
        ++cnt2[s2[i].charCodeAt() - 'a'.charCodeAt()];
        --cnt2[s2[i - n].charCodeAt() - 'a'.charCodeAt()];
        if (cnt1.toString() === cnt2.toString()) {
            return true;
        }
    }
    return false;
};
// 滑动窗口优化
var checkInclusion2 = function(s1, s2) {
    const n = s1.length;
    const m = s2.length;
    if (n > m) {
        return false;
    }
    const cnt = new Array(26).fill(0);
    for (let i = 0; i < n; ++i) {
        --cnt[s1[i].charCodeAt() - 'a'.charCodeAt()];
        ++cnt[s2[i].charCodeAt() - 'a'.charCodeAt()];
    }
    let diff = 0;
    for (const c of cnt) {
        if (c !== 0) {
            ++diff;
        }
    }
    if (diff == 0) {
        return true;
    }
    for (let i = n; i < m; ++i) {
        const x = s2[i].charCodeAt() - 'a'.charCodeAt();
        const y = s2[i - n].charCodeAt() - 'a'.charCodeAt();
        if (x == y) {
            continue;
        }
        if (cnt[x] == 0) {
            ++diff;
        }
        ++cnt[x];
        if (cnt[x] == 0) {
            --diff;
        }
        if (cnt[y] == 0) {
            ++diff;
        }
        --cnt[y];
        if (cnt[y] == 0) {
            --diff;
        }
        if (diff == 0) {
            return true;
        }
    }
    return false;
};
// 方法二：双指针
var checkInclusion3 = function(s1, s2) {
    const n = s1.length;
    const m = s2.length;
    if (n > m) {
        return false;
    }
    const cnt = new Array(26).fill(0);
    // 把所有的字母放到数组中，存在的字母则对应的数字是-1
    for (let i = 0; i < n; ++i) {
        --cnt[s1[i].charCodeAt() - 'a'.charCodeAt()];
    }
    let left = 0;
    // 右指针开始
    for (let right = 0; right < m; ++right) {
        // 拿出s2的第一个字符对比，得到对应的cnt的位置。
        const x = s2[right].charCodeAt() - 'a'.charCodeAt();
        // 对cnt位置进行加1，如果之前已经存在，则加一后位置处就是0.
        ++cnt[x];
        // 如果cnt当前位置大于0，s1中不存在这个字符
        while (cnt[x] > 0) {
            // 左指针位置的减一
            --cnt[s2[left].charCodeAt() - 'a'.charCodeAt()];
            // 左指针右移一，
            ++left;
        }
        // 注意到 [left,right] 的长度每增加 1，cnt 的元素值之和就增加 1。
        // 当 [left,right] 的长度恰好为 n 时，就意味着 cnt 的元素值之和为 0。
        // 由于 cnt 的值不为正，元素值之和为 0 就意味着所有元素均为 0，这样我们就找到了一个目标子串。
        if (right - left + 1 === n) {
            return true;
        }
    }
    return false;
};
// console.log(checkInclusion('ab', 'eidbaooo'));
// console.log(checkInclusion('ab', 'eidboaoo'));
console.log(checkInclusion3('abc', 'bbbca'));
// 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
// 换句话说，第一个字符串的排列之一是第二个字符串的 子串 。

// 示例 1：
// 输入: s1 = "ab" s2 = "eidbaooo"
// 输出: True
// 解释: s2 包含 s1 的排列之一 ("ba").

// 示例 2：
// 输入: s1= "ab" s2 = "eidboaoo"
// 输出: False

// 提示：
// 输入的字符串只包含小写字母
// 两个字符串的长度都在 [1, 10,000] 之间