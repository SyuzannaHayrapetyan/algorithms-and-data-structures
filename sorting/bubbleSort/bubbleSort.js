function bubbleSort(arr){
    const size = arr.length;
    for(let i = 0; i < size -1; ++i){
        let flage = false;
        for(let j = 0; j < size - 1 - i; ++j){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j+1]] = [arr[j+1],arr[j]];
                flage = true;
            }
        }
        if(!flage) break;
    }
    return arr;
}
let arr = [7,9,2,12,6,4,3];
console.log(arr);
let sorted = bubbleSort(arr);
console.log(sorted);
