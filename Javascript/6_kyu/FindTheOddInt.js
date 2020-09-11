function findOdd(A) {
    let result
    const counterList = {}
    
    
    A.forEach((num)=>{
    if(counterList[num]){
    counterList[num]++
    }
    else counterList[num] = 1
    });
    
    for(let num in counterList){
    if(counterList[num] %2 ==1){
    result = num;
    }
    }
    return Number(result);
  }