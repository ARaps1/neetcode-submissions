class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: (x[0], -x[1]))
        print(intervals)
        stack = []

        for interval in intervals:
         
            if not stack or interval[1] > stack[-1][1]:
                stack.append(interval)
        return len(stack)
        
        #TC: O(nlog(n))
        #SC: O(n)