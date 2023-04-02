/**
 * Bubble sort function
 * @param {number[]} arr
 */

var bubbleSort = function (arr) {
    let swapped = true;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    console.log(arr);
}

bubbleSort([5, 3, 1, 2, 4]);