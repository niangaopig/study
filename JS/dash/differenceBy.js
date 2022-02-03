/**
 * 这个方法类似_.difference ，除了它接受一个 iteratee （注：迭代器）， 
 * 调用array 和 values 中的每个元素以产生比较的标准。 
 * 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（
 * 注：首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。
 * 
 * @param {Array} array  要检查的数组。
 * @param {...array} values : 排除的值。
 * @param {Array|Function|Object|string} [iteratee = ._identity] :iteratee 调用每个元
 * @return {Array}返回一个过滤值后的新数组。
 */