function countingSort(arr){ 
    const min = Math.min(...arr); 
    const max = Math.max(...arr); 
    const range = max - min + 1; 
    const count = new Array(range).fill(0); 
    for ( let i = 0; i < arr.length; ++i){ 
        count[arr[i]- min]++; } console.log(count); 
        for (let i = 1; i < count.length; ++i){ 
            count[i] = count[i] + count[i-1]
        }
        console.log(count); 
        const output = new Array(arr.length); 
        for(let i = arr.length - 1; i >= 0; --i){ 
            let value = arr[i]; 
            let index = value - min; 
            count[index]--; 
            output[count[index]] = value; 
        } 
        return output; 
    } 
    const arr = [4, 2, 2, 8, 3, 3, 1];
    const res = countingSort(arr);
    console.log(res);