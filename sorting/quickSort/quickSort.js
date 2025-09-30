const swap = (arr, left, right) => {
    [arr[left], arr[right]] = [arr[right], arr[left]];
}

const partition = (arr, low, high) => {
    const pivot = arr[low];

    let i = low; 
    let j = high;

    while (i < j){
        do{
            i++;
        }while(i < high && arr[i] <= pivot);

        do{
            --j;
        }while(j >= low && arr[j] > pivot);
        
        if (i < j){
           swap(arr,  i, j);
        }
    }
    swap(arr, j, low);
    return j;

}

const quickSort = (arr, low, high) => {
    if(low < high){
        const pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

const arr = [ 13, 7, 4, 8, 6, 3, 9, 14];
quickSort(arr, 0 , arr.length);
console.log(arr)