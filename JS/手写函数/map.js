/**
 * @description 创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
 * @param {Function} fn 为数组中每个元素执行的函数
 * @param {thisArg} [thisArg] 当执行回调函数 callback 时，用作 this 的值。
 * @return {Array} 一个由原数组每个元素执行回调函数的结果组成的新数组。
 * @example
 * var array = [3,1,4,1,5,9,2,6];
 * console.log(array.map(x => x * 2))
 * // => [6, 2, 8, 2, 10, 18, 4, 12]
 */

Array.prototype._map = function(fn, thisArg){
    if (Object.prototype.toString.call(fn) !== '[object Function]') {
        throw new Error(`${fn} is not function`)
    }
    let result = []
    let arr = this
    for (let i = 0; i < arr.length; i++) {
        result[i] = fn.call(thisArg, arr[i], i, arr)
    }
    return result
}

var array = [3,1,4,1,5,9,2,6];
console.log(array.map(x => x * 2))
