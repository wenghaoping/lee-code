function max(list) {
    if(list.length === 2) {
        return list[0] > list[1] ? list[0] : list[1];
    }
    let left = list.shift();
    // #这里如果list很大，栈的空间就会很大，因为max()函数一直在运行，只到list被切分成长度为2
    let subMax = max(list);
    return left > subMax ? left : subMax;
}

console.log(max([100, 5,1,2,3,8,4,6,7,9]));