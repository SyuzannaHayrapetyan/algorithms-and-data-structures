function selectionSort(arr) {
    let min = 0;
    for (let i = 0; i < arr.length - 1; ++i) {
        min = i;
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}

let arr = [7, 8, 15, 1, 4, 10];
let res = selectionSort(arr);
console.log(res);