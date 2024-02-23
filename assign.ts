function bubbleSort(arr: Array<number>, n: number): void{
    console.log({arr});
    let result = [];
   let exchange = true
    for ( let i = 0; i < n -1; i++ ){
        //return the smaller element btw the first two elements
            let a = arr[i], b = arr[i + 1];


        for (let j = 1; j < n -1; j++ ){
            let c = arr[i + 2]
            //if the 3rd element is smaller
            if( c < b){
                result[i + 1] = c;
            }
            else if(c > b && c < a){}
        }

}
console.log({result});

}
bubbleSort([8,1,0,6], 4)