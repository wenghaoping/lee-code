// 插入排序的一种优化
// 设置一个增量，将数组中的数按此增量进行分组（比如增量为4，那下标为0，4，8...的数为一组）
// 对分组的数进行插入排序
// 缩小增量
// 重复步骤1、2、3，直到增量为1
// 当增量为1时，对整个数组进行一次插入排序，输出最后结果
// 时间复杂度与增量选取有关,以下算法时间复杂度为 O(n^(3/2))
// 非稳定排序（2个相等的数，在排序完成后，原来在前面的数还是在前面，即为稳定排序）

function shellSort(array) {
    let len = array.length, gap = 1;
    /* 此处获取一个最大增量，增量的获取方法不固定，这里采用比较常见的方式，一定要保证最后能取到1 */
    while(gap < len/3) {
        gap = gap * 3 + 1;
    }
    /* 每更新一次增量就进行一次插入排序 */
    while(gap > 0) {
        /* 以下逻辑与插入排序一致，当增量变为1时即完全一致 */
        for (let i = gap; i < len; i++) {
            /* 这里要循环到数组最后是因为要保障当前分组中的每一个数都经过排序，所以当前分组靠前的数据会被与后面的数据进行多次排序 */
            let current = array[i]
            let endIndex = i - gap
            while(endIndex >= 0 && array[endIndex] > current) {
                array[endIndex + gap] = array[endIndex]
                endIndex -= gap
            }
            array[endIndex+gap] = current
        }
        gap = Math.floor(gap/3)
    }
    return array
}
console.log(shellSort([5, 3, 6, 2, 10]));