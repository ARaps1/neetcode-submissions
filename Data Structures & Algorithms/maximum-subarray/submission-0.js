class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        /*
        input: nums maxSubArray
        output: a number

        keywords:
        - find the subarray with the largest sum
        - return the sum
        - Subarray with a non-empty sequence of elements within an maxSubArray

        Approach:
        - Variable to store the sum and one for the maxSum 
        - Loop thorugh the array nums
        - curSum is going to start from the first element at index 0, if adding the next element decreases the 


         Testing Case:
         - [2,-3,4,-2,2,1,-1,4]
         - maxSub = nums[0] = 2
         - curSum = 0

         - curSum = 0 + (nums[0]=2) + (nums[1]=-3) => -1, so we reset curSum to 0
         - curSum = (nums[2]=4)+ (nums[3]=-2) + (nums[4]=2) + (nums[5]=1) + (nums[6]=-1) + (nums[7]=4)

         - maxSub = Math.max((maxSub = 2), (curSum = 8))
         - return maxSub
         */



        let maxSub = nums[0];
        let curSum = 0;

        for(let i =0; i < nums.length; i++){
            if(curSum < 0){
                curSum = 0;
            }

            curSum += nums[i];

            maxSub = Math.max(maxSub,curSum);
        }

        return maxSub;
    }
}
