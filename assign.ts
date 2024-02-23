function bubbleSort(arr: Array<number>, n: number): number[]{
    
    console.log(arr);
    let result = [];
    for (var i = 0; i < n -1; i++){
        let pre_ele = arr[i];
        for (var j = 1; j < n; j++){
            let next_ele = arr[j];
            if(pre_ele < next_ele){
                result[0]  = 0
            }
        }

    }
    return arr;
}