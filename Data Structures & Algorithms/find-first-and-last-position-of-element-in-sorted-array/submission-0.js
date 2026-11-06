class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        /* inputs: An array (nums) and a target number 
            output: Return the first and last position of the intervals that gets you to the target
            keywords:
            - Non decreasing order
            - Run time complexity 0(log n)
            - if target not found, return [-1,-1]
            Approach:
            - Loop through the array
            - Create a pointer variable to move around
            - Create a variable to keep the first position
        */

        let n = nums.length;

        const binarySearch = (target) => {
            let right = n;
            let left = 0;

            while (left < right) {
                let middle = Math.floor(left + (right - left) / 2);

                if (nums[middle] < target) {
                    left = middle + 1;
                } else {
                    right = middle;
                }
            }
            return left;
        };

        let start = binarySearch(target);
        if (start === n || nums[start] !== target) {
            return [-1, -1];
        }

        return [start, binarySearch(target + 1) - 1];
    }
}
