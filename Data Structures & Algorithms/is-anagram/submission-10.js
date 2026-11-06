class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        /**Notes
         * Input: Two strings
         * Output: Return a boolean true if the two strings are anagrams of each other, otherwise return false;
         * Keywords: The two strings are anagrams if they contain the same characters, with each character appearing the same number of times regardless the order
         */

      //check point
      if (s.length !== t.length) return false;

      const result = {};

      for(const x of s){
         result[x] = (result[x]||0) + 1
      }

      for(const y of t){
        if(!result[y] || result[y]< 0) return false;

        result[y] = result[y]-1;
      }

      return true

        
    }
}
