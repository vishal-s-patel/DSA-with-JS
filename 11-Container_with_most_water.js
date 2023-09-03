var maxArea = function (height) {
    let left = 0, right = height.length - 1, maxWater = 0;
    while (left <= right) {
        let water = Math.min(height[left], height[right]) * (right - left);
        if (water > maxWater) {
            maxWater = water;
        }
        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }

    return maxWater;
};

console.log(maxArea([1, 1]));
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));