var threeSum = function(nums) {
    let arrNume = [];
    nums = nums.sort((a, b) => a - b);
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return arrNume;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let L = i + 1;
        let R = n - 1;
        while (L < R) {
            if (nums[i] + nums[L] + nums[R] === 0) {
                arrNume.push([nums[i], nums[L], nums[R]]);
                while(L < R && nums[L] === nums[L + 1]) {
                    L = L + 1
                }
                while(L < R && nums[R] === nums[R + 1]) {
                    R = R - 1;
                }
                L = L + 1;
                R = R - 1;
            } else if (nums[i] + nums[L] + nums[R] > 0) {
                R = R - 1;
            } else {
                L = L + 1;
            }
        }
    }
    return arrNume;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));