function mergeSort(arr, low, high){
    if(low >= high){
        return arr;
    }
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);

    return arr;
}

function merge(arr, low, mid, high){
    let left = arr.slice(low, mid + 1);   
    let right = arr.slice(mid + 1, high + 1); 
    let res = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length){
        if(left[i] <= right[j]){
            res.push(left[i]);
            ++i;
        } else {
            res.push(right[j]);
            ++j;
        }
    }

    while(i < left.length){
        res.push(left[i]);
        ++i;
    }

    while(j < right.length){
        res.push(right[j]);
        ++j;
    }

    for(let k = 0; k < res.length; ++k){
        arr[low + k] = res[k];
    }

    return arr;
}


const arr = [3, 8, 19, 4, 9, 2, 7];
let low = 0;
let high = arr.length - 1;
let result = mergeSort(arr, low, high);
console.log(result);