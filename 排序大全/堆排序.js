// 堆排序
// 分为大顶堆（子节点都小于父节点），小顶堆（子节点都大于父节点）
// 原理：
// 根据给定的数据创建堆
// 将堆顶和堆尾互换，将堆长度减1
// 递归步骤1、2

function heapSort(array) {
    let length = array.length
    /* 第一个非叶子节点（叶子节点：没有子节点的节点）： n/2 -1 */
    /* 为什么从这个点开始，也是因为这是最后一个拥有子节点的父节点，其可能会发生父子节点交换 */
    const node =  Math.floor(length/2) - 1
    /* 第一步先将数组构建为堆 这里是大顶堆 */
    for (let i = node; i >= 0 ; i--) {
        maxHeap(array, i, length)
    }
    /* 第二步 将堆顶元素与堆尾元素交换 再将前 (n-1) 个数重复构建堆 */
    for (let j = length - 1; j > 0; j--) {
        swap(array, 0, j)
        length--
        /* 这里相当于把第一个叶子节点改变了，所以下面从 0 开始, 当前堆的堆尾前一个数为结束 重新构建堆 */
        maxHeap(array, 0, length)
    }
    return array
}

function maxHeap(array, i, length) {
    /* 左子节点 */
    let left = i * 2 + 1
    /* 右子节点 */
    let right = i * 2 + 2
    /* 父节点 */
    let parent = i
    /* 找出子节点中比父节点大的数进行交换 */
    if(left < length && array[left] > array[parent]) {
        parent = left
    }
    /* 这里两个条件都触发也没有关系，只要保障，一个比父节点大的子节点被移上去即可 */
    if(right < length && array[right] > array[parent]) {
        parent = right
    }
    if(parent !== i) {
        swap(array,i, parent)
        /* 表示有数据移动，所以要重排一下数据移动后,所影响到的父子节点,也就是此时的 parent 节点和其子节点 */
        maxHeap(array, parent, length)
    }
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}