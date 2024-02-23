function bubbleSort(arr: Array<number>, n: number): void{
    console.log({arr});
    let result = [];
    for ( let i = 0; i < n; i++ ){
        
            let a = arr[i], b = arr[i + 1];
            if ( a < b ){
                result[i] = a;
            }
            else {
                result[i] = b;
            }

        for (let j = 0; j < n; j++ ){
           let c = result[j], d = arr[j + 1];
    }

}
console.log({result});

}
bubbleSort([8,1,0,6], 4)