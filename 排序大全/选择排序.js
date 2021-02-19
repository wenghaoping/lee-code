function selectionSort(arr) {
    console.time();
    for(let i = 0; i < arr.length; i++) {
        // 每轮比较开始之前，假设最小值
        let samllNumber = arr[i];
        // 保存最小值的索引
        let samllIndex = i;
        for( let j = i + 1; j < arr.length; j++) {
            if (arr[j] < samllNumber) {
                // 如果不是，保存真正的最小值
                samllIndex = j;
                // 最小值的索引
                samllNumber = arr[j];
            }
        }
        // 一轮结束后，确定了最小值，能拿到最小值的索引，交换
        // 先将第一位，放在最小值的位置
        arr[samllIndex] = arr[i];
        // 再将最小值，放在第一位
        arr[i] = samllNumber
    }
    console.log(arr);
    console.timeEnd();
    return arr;
}
console.log(selectionSort([5, 3, 6, 2, 10]));