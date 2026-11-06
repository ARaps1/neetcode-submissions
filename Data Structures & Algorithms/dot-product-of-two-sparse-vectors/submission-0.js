class SparseVector {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        const newNums = new Map();
        nums.forEach((value, index)=>{
            if(value !==0){
                newNums.set(index,value);
            }
        });

        this.newNums = newNums;
    }

    // Return the dotProduct of two sparse vectors
    /**
     * @param {SparseVector} vec
     * @return {number}
     */
    dotProduct(vec) {
        let total =0;
        for(const [index, value] of this.newNums){
              if(vec.newNums.has(index)){
                total += value * vec.newNums.get(index);
              }
        }
        return total;
    
    }
}

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
