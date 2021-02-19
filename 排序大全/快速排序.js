var quickSort = function(arr) {
　　if (arr.length <= 1) { return arr; }
    // 基线条件
　　var pivot = arr[0];
　　var left = [];
　　var right = [];
　　for (var i = 1; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
};


console.log(quickSort([5, 3, 6, 2, 10]));

function quickSort2(arr) {
    if (arr.length <= 1) { return arr; }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i])
        }
    }
    return quickSort2(left).concat([pivot], quickSort2(right))
}
// console.log(quickSort2([5, 3, 6, 2, 10]));