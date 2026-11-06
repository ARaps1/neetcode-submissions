class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let pointer = 0;
        let farthest = 0;
        let counter = 0;

        for(let i = 0; i < nums.length-1; i++){
          farthest = Math.max(farthest,i + nums[i]);//2,5,3



          if (i === pointer) { //0 === 0, 2===2
                counter++;//1, 2
                pointer = farthest; //2,5

                if (pointer >= nums.length - 1) break; //2 >= 5, 5 >=5
            }
        }

        return counter;

    }
}
