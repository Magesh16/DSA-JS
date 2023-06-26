let nums = [5,7,7,8,8,10], target = 8;
let searchRange = function(nums, target) {
    return [nums.indexOf(target), nums.lastIndexOf(target)]
}
console.log(searchRange(nums,target));

//Input: nums = [5,7,7,8,8,10], target = 6
//Output: [-1,-1]

//Input: nums = [], target = 0
//Output: [-1,-1]
