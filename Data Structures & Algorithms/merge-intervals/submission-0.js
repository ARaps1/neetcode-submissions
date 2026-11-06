class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        /* 
input: interval array
output: An array with merged intervals

Keywords: 
- Merge overlaping
- if the end of one of the interval sub array is equal to the stating value of the next one, it is considered overlaping

Approach:
- Sort the intervals by order of ending intervals, low to high end
- Store the ending of the first sub array at index 0 of the interval array
- Create an array to store the merged values
- Loop through the array intervals starting from the first index
- Compare the starting of the interval at index 1 to the ending at index 0
     -  if starting is less than the ending, keep the starting point of index 0 and update the ending
     - then push it into the array
     - if they dont over lap, 
     
     
  */
        if (intervals.length === 0) return [];
        intervals.sort((a, b) => a[0] - b[0]);
        let prevEnd = intervals[0][1];
        let prevStart = intervals[0][0];
        const merged = [];

        for (let i = 1; i < intervals.length; i++) {
            const start = intervals[i][0];
            const end = intervals[i][1];

            if (start <= prevEnd) {
                prevEnd = Math.max(prevEnd, end);
            } else {
                merged.push([prevStart, prevEnd]);
                prevStart = start;
                prevEnd = end;
            }
        }
        merged.push([prevStart, prevEnd]);

        return merged;
    }
}
