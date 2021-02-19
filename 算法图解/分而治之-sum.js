const sum = (list) => {
    if (list.length === 0) {
        return 0
    }
    let first = list[0];
    list.shift();
    return first + sum(list);
}
// console.log(sum([1,2,3]));
console.log(sum([1,2,3,4,5,6,7]));