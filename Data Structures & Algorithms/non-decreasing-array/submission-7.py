class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
        changed = False
        
        for i in range(len(nums) - 1):
            if nums[i] <= nums[i + 1]:
                continue
            
            if changed:
                return False

            # if we on first element, we got nothing to the left. Second case is if the next element is bigger or equal to the one of the left, we can just match the one on the right. It is no problem
            if i == 0 or nums[i + 1] >= nums[i - 1]:
                nums[i] = nums[i + 1]
            else:
                nums[i + 1] = nums[i]
            changed = True
        return True