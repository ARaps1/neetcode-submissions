class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0

        write_index = 1  # Start from index 1, since the first element is always unique
        for i in range(1, len(nums)):
            cur_val = nums[i]
            if cur_val != nums[i - 1]:  # Found a new unique value
                nums[write_index] = cur_val
                write_index += 1

        print(nums)  # Optional debug
        return write_index  # Number of unique values



