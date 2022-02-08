/**
 * @description 对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
 * arr.reduce(callback(accumulator, currentValue,[index],[array]),[initialValue])
 * @param {Function} fn 为数组中每个元素执行的函数
 * @param {number} [initValue] 作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
 * @example
 * array = [3,1,4,1,5,9,2,6]
 * console.log(array.reduce( (sum, n) =>  sum + n))
 * // => 31
 */

Array.prototype._reduce = function (fn, initValue) {
    if (Object.prototype.toString.call(fn) !== '[object Function]') {
        throw new Error(`${fn} is not function`)
    }

    let arr = this
    let initIndex;
    let acc;
    //根据argumengts长度判断是否传入initValue,如果存在则从数组第一项开始遍历,不存在则从第一项开始遍历
    initIndex = arguments.length === 1 ? 1 : 0 
    acc = arguments.length === 1 ? arr[0] : initValue
    for (let i = initIndex; i < arr.length; i++){
        arr = fn(acc,arr[i], arr);
    }
    return acc  
}
array = [3,1,4,1,5,9,2,6]
console.log(array.reduce( (sum, n) =>  sum + n))