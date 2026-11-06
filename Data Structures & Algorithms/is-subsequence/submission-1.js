class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        //inputs: 2 strings
        //outputs: a boolean

       let i = 0;
       let j =0;

       while(i<s.length && j<t.length){
        if(s[i]=== t[j]){
            i++
        }
        j++;

        
       }
return s.length === i;
}
}
