// 归并排序
// 分治法：把一个复杂的问题分成两个或更多的相同或相似的子问题，
// 再把子问题分成更小的子问题……直到最后子问题可以简单的直接求解，原问题的解即子问题的解的合并
// 原理：将当前数组，递归分组，比较大小后再一 一合并分组，是采用分治法的一个应用
// 获取一个中间位置的值，然后以该位置为中心点分组
// 递归进行分组
// 比较当前两个分组，将其合并为一个数组
function mergeSort(array) {
    const len = array.length
    if(len < 2) return array;
    const middle = Math.floor(len/2);
    /* 取中间值进行分组 */
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    /* 递归分组 */
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = []
    /* 两个分组都有值时，逐个进行比较 */
    while (left.length && right.length) {
        if(left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    /* 只有一个分组时，表明其全部为最大值，直接全部放入结果数组即可 */
    if(left.length){
        result.push(...left)
    }
    if(right.length){
        result.push(...right)
    }
    return result
}