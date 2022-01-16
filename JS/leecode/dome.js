/* 给你一个数组 nums ，数组中有 2n 个元素，按[x1, x2,..., xn, y1, y2,...,yn]的格式排列。

    请你将数组按[x1, y1, x2, y2,..., xn, yn]格式重新排列，返回重排后的数组。 */
    var shuffle = function (nums, n) {        
        for (var i = 1;i<n;i++){
            var temp = nums[i]
            nums[n + 1] = nums[i]
            nums[i] = nums[n + 1]
            
        }
        console.log(nums)
    }

    shuffle([2, 5, 1, 3, 4, 7], 3)