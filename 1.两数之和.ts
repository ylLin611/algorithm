/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let map = {};
  for(let key in nums){
      let l = target - nums[key];
      if(map[l] !== undefined){
          return [map[l],Number(key)];
      }
      map[nums[key]] = Number(key);
  }
  return []
};
// @lc code=end
