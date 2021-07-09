/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0,
        right = height.length - 1,
        maxHeight = calcArea(left, right);

    while (true) {
        if (height[left] < height[right]) { left += 1; }
        else { right -= 1; }

        if (left >= right) { break; }
        maxHeight = Math.max(maxHeight, calcArea(left, right));
    }

    return maxHeight;

    /**
     * Returns the area created from the container made from the left and right lines
     * @param {number} left - index of left line
     * @param {number} right - index of right line
     * @return {number}
     */
    function calcArea(left, right) {
        return (right - left) * Math.min(height[left], height[right]);
    }
};
