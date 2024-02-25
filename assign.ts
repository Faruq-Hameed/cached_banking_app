// function bubbleSort(arr: Array<number>, n: number): void{
//     console.log({arr});
//     let temp;
//    let exchange = true;
//    let val;
//     for ( let i = 0; i < n -1; i++ ){
//         //return the smaller element btw the first two elements
//             let a = arr[i], b = arr[i + 1];
//             exchange = false
     
//         for (let j = 1; j < n -1; j++ ){
//            if(a < b ){
//             temp = a;

//            }
//         }

// }
// // console.log({result});

// }
// bubbleSort([8,1,0,6], 4)

function bubbleSort(arr: number[], n: number)
{
    console.log(arr, 'un swapped')
   
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++) 
    {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) 
        {
            if (arr[j] > arr[j + 1]) 
            {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
 
        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped == false)
        break;
    }
    console.log(arr, 'swapped')
}

// const result = bubbleSort([9,7,5,0,8,10,45,8],8)
// console.log({result})
function bubbleSortA(arr: number[], n: number) : void{
    console.log("un swapped array", arr)
    for (let i = 0; i < n; i++) {
        let a = arr[i], b = arr[i+ 1]
        //swapped if b is less than a
        if (a > b) {
            arr[i] = b;
            arr[i+1] = a
        }
        console.log((i),{arr})
    }
  console.log("swapped array", arr)
}
bubbleSortA([4,2,8,0, 1], 4)