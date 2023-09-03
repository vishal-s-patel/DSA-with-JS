/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let left = 0, right = nums.length - 1, count = 0;
    while (left <= nums.length - 1) {
        if (nums[left] === val) {
            while (nums[right] === val) {
                right--;
            }
            nums[left] = nums[right];
            count++;
            right--;
        }
        left++;
    }
    return nums.length - count;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));