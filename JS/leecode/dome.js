var minimumCost = function(cost) {
/*     var sum = 0
    if(cost.length <= 2){
        for(var i = 0 ;i < cost.length ; i++){
            sum += cost[i]
        }
    } */
    var sum =0
    var newcost = cost.sort(function(a,b){return b-a})
    for(var i = 0 ;i < newcost.length;i++){
        if((i+1) % 3 !== 0){
            sum = sum + newcost[i]
        }
        
    }
    return sum
    console.log(sum)
};

minimumCost([6,5,7,9,2,2])
