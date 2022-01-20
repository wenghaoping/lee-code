function numFormat(num) {
  num = num.toString().split("."); // 分隔小数点
  var arr = num[0].split("").reverse(); // 转换成字符数组并且倒序排列
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      res.push(","); // 添加分隔符
    }
    res.push(arr[i]);
  }
  res.reverse(); // 再次倒序成为正确的顺序
  // 如果有小数的话添加小数部分
  if (num[1]) {
    res = res.join("").concat("." + num[1]);
  } else {
    res = res.join("");
  }
  return res;
}

var a = 1234567894532;
var b = 673439.4542;
console.log(numFormat(a)); // "1,234,567,894,532"
console.log(numFormat(b)); // "673,439.4542"

// 实现思路是将数字转换为字符数组，再循环整个数组，
// 每三位添加一个分隔逗号，最后再合并成字符串。因为分隔符在顺序上是从后往前添加的：
// 比如 1234567添加后是1,234,567 而不是 123,456,7 ，
// 所以方便起见可以先把数组倒序，添加完之后再倒序回来，就是正常的顺序了。
// 要注意的是如果数字带小数的话，要把小数部分分开处理。
