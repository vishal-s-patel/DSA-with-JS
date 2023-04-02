/**
 * Factorial of a number
 * eg - Factorial of 4 = 4*3*2*1 = 24
 */

/**
 * @param {number} n
 */
var factorial = function (n) {
    let factorial = 1;
    while (n > 0) {
        factorial *= n;
        n -= 1;
    }
    return factorial;
}

console.log(factorial(-1));
