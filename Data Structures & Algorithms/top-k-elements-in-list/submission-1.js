class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        /**Notes:
         * Input:
         * Output:
         * Keywords:
         *
         * Case 1:
         * Input: nums = [1,2,2,2,2,3,3,3,3,3], k = 2
         * Output:[2,3]
         *
         * Case 2:
         * Input: nums = [7,7], k = 1
         * Output:[7]
         *
         */
        const results = {};

        const frequency = Array.from({ length: nums.length + 1 }, () => []);
        /** This just creates an array of empty arrays --> ex: nums' length = 3
         *  [ [], [], [], []]
         */
        for (const elem of nums) {
            results[elem] = (results[elem] || 0) + 1;
            //Adding the count to the object as key =count pair
            /** Using Case 1
             * {1:1,
             *  2:4,
             *  3:3}
             */
        }

        for (const elem in results) {
            frequency[results[elem]].push(parseInt(elem));
            //Using Case 1
            /** frequency[[results[1]].push(parseInt(elem));
             *  frequency[1].push(1) --> [[],[1]]
             *
             * frequency[[results[2]].push(parseInt(4));
             * frequency[2].push(2) --> [[],[1],[4]]
             *
             * frequency[[results[3]].push(parseInt(3));
             * frequency[3].push(5) --> [[],[1],[4],[5]]
             * 
             * 
             * freq[0] = []      // unused
             * freq[1] = [1]
             * freq[2] = [4]
             * freq[3] = [5]
             * 
             * Adding parseIn because keys are strings
             */
        }

        const res = [];
        for (let i = frequency.length - 1; i >0; i--) {
            for (const n of frequency[i]) {
                res.push(n);

                if (res.length === k) {
                    return res;
                }
            }
        }

        /**
         * The highest frenquency is going to be the last index, so you iterate backwards
         * 
         * 
         * res.push(n);
         * n --> 3, because the freq[3] is in position 3
         * [3]
         * 
         * if(res.length === k) return res x
         * 
         * res.push(freq[2]);
         * return [3,2]
         * 
         * 
         */
    }
}
