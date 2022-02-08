/**
 * 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
 * @param {Array} array : 要查询的数组。
 * @param {Number} n: 要去除的元素个数
 * @return {Array} :返回array剩余切片。
 */

function dropRight(array, n = 1) {
    if(n >= array.length) {
        return []
    };
    var ary = [];
    for(var i = 0; i < array.length - n; i++) {
        ary.push(array[i])
    };
    return ary
}

console.log(dropRight([1, 2, 3]));
console.log(dropRight([1, 2, 3], 2));
console.log(dropRight([1, 2, 3], 5));
console.log(dropRight([1, 2, 3], 0));