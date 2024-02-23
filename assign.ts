function bubbleSort(arr: Array<number>, n: number): void{
    console.log({arr});
    let result = [];
    for ( let i = 0; i < n; i++ ){
        
        for (let j = 0; j < n; j++ ){
            let a = arr[i], b = arr[j];
            if ( a < b ){
                result[i] = a;
            }
    }
}
// bubbleSort([8,1,0,6], 8)