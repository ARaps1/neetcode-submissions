class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        /* 
        input:nums array
        output:a boolean to indicate wether the last element is reachable

        Keywords:
        - nums[i] indicates your maximum jump length
        - Starting from 0, return true if you reach last index

        Approach:
        - Varible to keep track of the goal post 
        - We are going to move backwards, starting from the back until we reach the first index
        - Loop from the back (nums.length -2) element before the last, then we will be decreasing i until we reach the first element position of i=0;
        - 

        Testing:
        nums = [1,2,0,1,0] i=3
                        ^
                        goalPost = 0
                      ^  
                     (3 + 1 >= 0) yes, so goal post gets moved to i = 4 --> goalPost = 3
                    ^
                   (2 + 0 >= 4) No, move on
                  ^
                 (1 + 2 >= 4)  Yes, we move the goalPost to position 1 --> goalPost = 1
                ^
                (0 + 1 >= 1) Yes, we move the goalPost to position  0 --> goalPost = 0

        After looping, return goalPost === 0 (true)
           */
        let goalPost = nums.length-1;

          for(let i = nums.length -2; i>=0; i--){
            
            if(i + nums[i] >= goalPost){
                goalPost = i;
            }
          }

          return goalPost === 0;
    }
}
