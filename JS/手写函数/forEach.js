/**
 * @description 对数组的每个元素执行一次给定的函数。
 * array.forEach(callback(currentValue, [index], [arr]), [thisValue])
 * @param {Function} fn 为数组中每个元素执行的函数
 * @param {thisArg} [thisArg] 当执行回调函数 callback 时，用作 this 的值。
 */

Array.prototype._forEach = function(fn, thisArg) {
    //判断fn是否为函数,不为函数抛出错误
    if (Object.prototype.toString.call(fn) !== '[object Function]') {
        throw new Error(`${fn} is not a function`)        
    }
    //判断this是否为数组,不为数组抛出错误
    if (Object.prototype.toString.call(this) !== '[object Array]') {
        throw new Error(`${this} is not a Array`)
    }
    let arr = this
    for (let i = 0; i < arr.length; i++){
        fn.call(thisArg,arr[i],i,arr)
    }
}
var arr = [3, 1, 4, 1, 5, 9, 2, 6]
arr._forEach((it,index) => console.log(it,index))