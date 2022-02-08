/** 
 *将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 
 *如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 * @param {array} array  需要处理的数组
 * @param {number} size 每个数组区块的长度
 * @return {array} 返回一个包含拆分区块的新数组（注：相当于一个二维数组）
 */

function chunk(array, size = 1) {
    if (size <= 1) {
        return array
    }
    var ary = []
    var temp = []
    for (var i = 0; i < array.length; i++) {
        temp.push(array[i])
        if (temp.length === size) {
            ary.push(temp)
            var temp = []
        }
    }
    if (temp.length > 0) {
        ary.push(temp)
    }
    return ary
}
 
console.log(chunk([1, 2, 3, 4, 5, 9, 1,7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9],10))