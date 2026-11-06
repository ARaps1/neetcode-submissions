class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        
        length = len(nums)
        cur_index = 0
        if length == 0:
            return 0
        for i in range(0, length):
            if nums[i] != val:
                nums[cur_index] = nums[i]
                cur_index = cur_index + 1
        return cur_index 

