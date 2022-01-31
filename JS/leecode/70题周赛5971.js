var countElements = function(nums) {
    newsnums = nums.sort(function(a,b){return a-b});
    var first = 0
    var last = 0
    for(var i = 0 ;i <= newsnums.length ;i++){
        if(newsnums[i] == newsnums[0]){
             first++
        }
        if(newsnums[i] == newsnums[newsnums.length - 1]){
            last++
        }
    }
    return newsnums.length -2-first-last

};
debugger;countElements([-71,-71,93,-71,40])