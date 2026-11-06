class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //Returning the indexes of the numbers that sums upto the target number
        //[3,4,5,6] target = 7 --> [0,1]
        //[4,5,6] target= 10 --> [0,2]
        //[5,5] target=10 --> [0,1]
        //Assuming every input has a pair of indeces that satify the condition

        //Approach
        //Using a hash map to store the value of the indices and the target - the value in that indexes
        //Looping through the array because the index matters 

        const hash = {};

        for(let i=0; i < nums.length; i++){
            //if the difference already exist return the indices
            const complement = target - nums[i]
            
            if(hash[nums[i]] !== undefined){
                return [hash[nums[i]],i]
            }

            hash[complement]= i;
        }
    }
}