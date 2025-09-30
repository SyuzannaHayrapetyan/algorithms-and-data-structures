function insertionSort(arr){
    const size = arr.length;
    for(let i = 1; i < size; ++i){
        let key = arr[i];
        let j = i -1;
        while(j >= 0 && arr[j] > key ){
            arr[j+1] = arr[j];
            --j;
              }
              arr[j+1] = key;
        }
        return arr;
}
let arr = [7,3,4,6,15,1,2,5];
console.log(arr);
let res = insertionSort(arr);
console.log(res);