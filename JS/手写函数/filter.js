/**
 * @description 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
 * var newArray = arr.filter(callback(element,[index],[array]),[thisArg])
 * @param {Function} fn 为数组中每个元素执行的函数
 * @param {thisArg} [thisArg] 当执行回调函数 callback 时，用作 this 的值。
 * @example
 * const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
 * const result = words._filter(word => word.length > 6);
 * console.log(result);
 * // = >expected output: Array ["exuberant", "destruction", "present"]
 */

Array.prototype._filter = function (fn, thisArg) {
    if (Object.prototype.toString.call(fn) !== '[object Function]') {
        throw new Error(`${fn} is not function`)
    }
    let arr = this
    let result = []
    for (var i = 0; i < arr.length; i++){
        if (fn.call(thisArg, arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result
}

words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
console.log(words._filter(word => word.length > 6))
