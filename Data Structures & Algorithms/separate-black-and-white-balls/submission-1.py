class Solution:
    def minimumSteps(self, s: str) -> int:
        ones = 0
        swaps = 0
        for val in s:
            if val == "1":
                ones += 1
            else:
                swaps += ones
        return swaps


            