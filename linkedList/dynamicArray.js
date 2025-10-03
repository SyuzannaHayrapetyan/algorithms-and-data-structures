class DArray {
    #size = 0;
    #capacity = 0;
    #arr = null;
    #CAP_EXPONENT = 2;

    constructor (cap = 2){
        this.#capacity = cap;
        this.#arr = new Uint32Array(cap);
    }
    resize(new_cap){
        const tmp = new Uint32Array(new_cap);
        for(let i = 0; i < this.#size; ++i){
            tmp[i] = this.#arr[i];
        }
        this.#arr = tmp;
        this.#capacity = new_cap;
    }
    push_back(elem){
        if(this.#size === this.#capacity){
            this.resize(this.#capacity * this.#CAP_EXPONENT)
        }
        this.#arr[this.#size++] = elem;
    }
    pop_back(){
        if(this.#size === 0 ) return undefined;
        return this.#arr[--this.#size];
    }
    get(index){
        if(index < 0 || index >= this.#size) throw new Error("Index out of range");
        return this.#arr[index]; 
    }
    [Symbol.iterator]() {
        let i = 0;
        const size = this.#size;
        const arr = this.#arr;
        return{
            next(){
                if(i < size) return {
                    value: arr[i++],
                    done: false
                };
                return {
                    done: true
                };
            }
        }



    }
}
const arr = new DArray(4);
arr.push_back(10);
arr.push_back(20);
arr.push_back(30); 
arr.push_back(40); 
console.log(...arr); 
console.log(arr.pop_back()); 
console.log(arr.get(0));    