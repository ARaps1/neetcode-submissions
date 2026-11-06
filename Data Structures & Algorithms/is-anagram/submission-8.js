class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //I can use hash map in order to keep count of the letters and tho search if we already have the char or nor

        if (s.length !== t.length) return false;

        const hash = {};

        for(let i=0; i < s.length; i++){
                hash[s[i]] = (hash[s[i]] || 0) + 1
        } 

        for(let j=0; j < t.length; j++){
            if(!hash[t[j]] || hash[t[j]] < 0){
                return false;
            }

            hash[t[j]] = hash[t[j]] - 1

        }

        return true;

    }
}
