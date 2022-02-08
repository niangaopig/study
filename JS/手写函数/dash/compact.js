/**
 *创建一个新数组，包含原数组中所有的非假值元素。
 *例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。 
 * @param {array} array :待处理的数组
 * @return {array} : 返回过滤掉假值的新数组。
 *  */ 
function compact(array) {
    ary = []
    array.forEach(it => {
        if (it) {
            ary.push(it)
        }
    });
    return ary
}

console.log(compact([0, 1, false, 2, '', NaN, undefined, 234, 1, 'apple', 3]))
