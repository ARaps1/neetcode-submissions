class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    /**Notes
     * Input: Integer array (nums)
     * Output: Boolean(return true if the number appears more than once, else return false)
     */
    hasDuplicate(nums) {
        const results = {}
        for(const x of nums){
            if(results[x] === x){
                return true;
            }

           results[x] = x;

        }

        return false;


    }
}
