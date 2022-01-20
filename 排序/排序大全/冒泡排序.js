//冒泡排序
// 原理：依次比较两个相邻的元素，将较大的放到右边（升序排列）
// 一轮循环只找到一个最值，然后通过多次这样的循环（所以有两层嵌套循环），获得一个排序结果

function bubbleSort(array) {
    const len = array.length
    let sorted = true
    /* 每找到一个最值，需要一次循环 */
    for (let i = 0; i < len; i++) {
        /* 必须每轮循环前，假设是排好序后的数组，防止只需要前几次循环就排好的情况 */
        sorted = true
        /* 这里的循环是找出当前轮的最值 */
        /* len-1-i 保障 j+1 能取到，同时放到最后的数，不用参与下一轮的循环，因为它已经是上一轮找出的最值 */
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                sorted = false
            }
        }
        /* 如果是已经排好序了就直接退出循环，此时最优时间复杂度 O(n) */
        if (sorted) break
    }
    return array
}

console.log(bubbleSort([5, 3, 6, 2, 10]));