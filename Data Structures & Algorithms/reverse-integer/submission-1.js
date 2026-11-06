class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    // reverse(x) {
    //     const sign = x < 0 ? -1 : 1;
    //     const min = -(2 ** 31);
    //     const max = 2 ** 31 - 1;

    //     const reverse = Number(Math.abs(x).toString().split("").reverse().join("")) * sign;

    //     return reverse < min || reverse > max ? 0 : reverse;
    // }

    reverse (x){
        let reversed = 0;
        const min = -(2**31);
        const max = 2**31 -1;

        while( x !== 0){
            const digit = x % 10;
            x = Math.trunc(x/10);
            reversed = reversed * 10 + digit;
        }

        return (reversed < min || reversed > max)? 0 : reversed;

    }
}