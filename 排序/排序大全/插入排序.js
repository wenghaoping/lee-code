// 插入排序

// 原理： 将未排序队列中的数值，逐个与已排序队列中的数进行比较，
// 当出现大于或小于已排序队列中的某个数时，进行插入操作
// 注意与选择排序的区别，选择排序是在未排序的数中找最值
// 然后交换位置，插入排序则是在已排序的的数中找对应的第一个相对最值

function insertionSort(array) {
    let len = array.length
    for (let i = 1; i < len; i++) {
        /* 记录当前未排序的数，该数将会和有序数列中的数进行比较 */
        let current = array[i]
        /* 有序数列的最后一个数（如果是从小到大排列，也就是最大的数） */
        let endIndex = i - 1
        while (endIndex >=0 && array[endIndex] > current) {
            /* 将有序数列中的数，逐一与当前未排序数进行比较直到，找出比当前未排序数小的数即停止 */
            array[endIndex + 1] = array[endIndex]
            endIndex--
        }
        /* 将最后一个往后移动空出来的位置赋值为，当前未排序数 */
        array[endIndex+1] = current
    }
    return array
}
console.log(insertionSort([5, 3, 6, 2, 10]));