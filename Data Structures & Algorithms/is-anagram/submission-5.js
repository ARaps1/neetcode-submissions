class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    //two pointers
    //check if the length is the same
    //use sort
    //inputs are lowercase english letters

   if (s.length !== t.length) return false;
    const sSorted = s.split("").sort().join('');
    const tSorted = t.split('').sort().join('');

  
    if (sSorted === tSorted){
      return true;
    }else{
      return false;
    }

    
  }
}

