/* 插入排序
将要排序的数组依次插入临时的数组中，并且插入时要比较该元素与临时数组中元素的大小
复杂度：最好 o(n) 最坏o(n ^ 2) 平均o(n ^ 2)  稳定  */
function insertSort(ary) {
    for (var i = 1; i < ary.length; i++){
        var n = ary[i]
        var j = i - 1
        while (j >= 0 && n < ary[j]) {
            ary[j + 1] = ary[j]
            j--
        }
            ary[j+1] = n
        
    }
    return ary
}
/* 冒泡排序
从左到右，一次比较相邻元素的大小
实现思路
共进行数组长度减一次循环
每一趟比较次数递减
可以进行优化，若某次排序未发生交换即可提前结束
复杂度：最好 o(n) 最坏o(n ^ 2) 平均o(n ^ 2)  稳定  */
function bubbleSort(ary) {
    for (var i = 0; i < ary.length - 1; i++) {
        var falg = false
        for (let j = 0; j < ary.length - i - 1; j++) {
            if (ary[j] > ary[j + 1]) {
                var swap = ary[j]
                ary[j] = ary[j + 1]
                ary[j + 1] = swap
                falg = true
            }
        }
        if (!falg) {
            break
        }
    }
    return ary
}

/* 选择排序
选取某个元素，与后面的元素中寻找是否比它小（或大）的，若有则进行交换
实现思路
选择排序共要进行数组长度减一次排序
每次排序先假定这个数是最小数，然后依次和后面的元素进行比较，发现有更小的数就记录值和下标，直至扫描完，交换
复杂度： 平均o(n ^ 2)  不稳定 */
function selectSort(ary) {
    for (let i = 0; i < ary.length - 1; i++) {
        let minIndex = i
        for (let j = i; j < ary.length; j++) {
            if (ary[j] < ary[minIndex]) {
                minIndex = j
            }
        }
        let temp = ary[i]
        ary[i] = ary[minIndex]
        ary[minIndex] = temp
    }
    return ary
}

/* 归并排序 */

/* 快速排序 */
function quickSort(ary) {
    if (ary.length < 2) {
        return ary.slice()
    }
    var randomIdx = Math.floor(Math.random() * ary.length)
    var pivot = ary[randomIdx]
    var left = []
    var right = []
    var mid = []

    for (var i = 0; i < ary.length; i++) {
        if (ary[i] < pivot) {
            left.push(ary[i])
        }else if (ary[i] > pivot) {
            right.push(ary[i])
        } else {
            mid.push(ary[i])
        }
    }


    left = quickSort(left)
    right = quickSort(right)
    return[...left,...mid,...right]
}

function qSort(ary, start = 0, end = ary.length -1) {
    if (start >= end) {
        return ary
    }
    var pivotIdx = Math.floor(Math.random() * (end - start + 1) + start)
    var pivot = ary[pivotIdx]
    ary[pivotIdx] = ary[end]
    ary[end] = pivot
    var i = start
    //不遍历放在最后的哨兵元素
    for (var j = start; j < end ; j++){
        if (ary[j] < pivot) {          
            let swapidx = ary[i]
            ary[i] = ary[j]
            ary[j] = swapidx
            i++
        }
    }
    let swapidx = ary[i]//哨兵元素换中间
    ary[i] = ary[end]
    ary[end] = swapidx

    qSort(ary,start, i - 1)
    qSort(ary, i + 1, end)//i +1  = poivt不用动了 
    return ary
}  

console.log(bubbleSort([3,1,4,1,5,9,2,6]))