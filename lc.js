let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// let i = 0;
// let j = nums.length - 1;
// let k = 0;
// while (i < nums.length) {
//     console.log('I', i);
//     if (nums[i] !== nums[j]) {
//         j--;
//     } else {
//         console.log('before', nums);
//         nums[k] = nums[j + 1];
//         k++;
//         i = j + 1;
//         j = nums.length;
//     }
//     console.log("k", k);
//     console.log(nums);
// }
// console.log(nums);

let j = 0;
let n = nums.length;

for (let i = 0; i < n - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
        nums[j++] = nums[i];
    }
}

console.log(nums);
nums[j++] = nums[n - 1];

console.log(nums);