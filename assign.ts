function bubbleSort(arr: Array<number>, n: number): void{
    console.log({arr});
    let result = [];
    for ( let i = 0; i < n -1; i++ ){
        
            let a = arr[i], b = arr[i + 1];
            if ( a < b ){
                result[i] = a;
            }
            else {
                result[i] = b;
            }

        for (let j = 1; j < n -1; j++ ){
            let c = result[j];
            if (c < )
        }

}
console.log({result});

}
bubbleSort([8,1,0,6], 4)