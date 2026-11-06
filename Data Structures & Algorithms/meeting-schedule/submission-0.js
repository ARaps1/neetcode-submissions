/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        /**
         * inputs: intervals array with subarrays indicating starting and ending times [[start,end]]
         * outputs: A boolean
         * keywords:
         * - Determine if a person could add all meetings to their schdule
         * - The intervals may be provided in any order
         * Approach:
         * - Sort the numbers by the starting time to make sure they don't overlap
         * - Create a varible to keep the first ending meeting time
         * - Loop through the array and subarrays
         * - return boolean
         */
        if (intervals.length === 0) return true;

        intervals.sort((a,b)=> a.start - b.start);
        let prevEnd = intervals[0].end;

        for(let i = 1; i < intervals.length; i++ ){
            const currentStart = intervals[i].start
            if(currentStart < prevEnd){
                return false;
            }

            prevEnd = intervals[i].end;
        }
        return true;

    }

}