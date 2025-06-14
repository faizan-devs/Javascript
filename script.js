function linearSearch(arr, n, x){
    let i;
    for(i = 0; i < n; i++){
        if(arr[i] == x){
            return i;
        }
    } 
    return -1;
}

function serachInArr(arr, n, x){
    let result = linearSearch(arr, n, x);
    if(result == -1){
        console.log("Element is not present in array")
    }else{
        console.log("Element present at index", result);
    }
}

let arr = [20, 30, 40, 50, 60];
let n = arr.length;

let x1 = 40;
serachInArr(arr, n, x1);

let x2 = 4;
serachInArr(arr, n, x2);