class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newString = s.replace(/[^a-zA-Z0-9]/g,"").toUpperCase();

        //BASE CASE
        if(newString.length <= 1)return true;
        if(newString[0]!== newString[newString.length-1]) return false;

        return this.isPalindrome(newString.slice(1,newString.length-1))
    }
}
