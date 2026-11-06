class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        /**Notes
         * input: A string
         * Output: A Boolean of whether the string is a palindrom or not after considering only the non-alphanumeric characters
         *
         * Cases:
         * If the string.length == 1 return true
         * After removing the non-alp, if the left index is not the same as the right, return false. Otherwise move closer until you either get a mixed match or run through the whole string;
         */

        if (s.length === 1) return true;

        let res = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

        let left = 0;
        let right = res.length - 1;

       while(right > left){
        if(res[left] !== res[right]){
            return false;
        }

        left ++;
        right --;
       }

        return true;
    }
}
