// First attempt, bad time complexity since it relies on values in nums
var canJump = function(nums) {
  let idxs = new Set([0]);

  for (let idx of idxs) {
    if (idx === nums.length - 1) return true;

    for (let i = 1; i <= nums[idx]; i++) {
      idxs.add(idx + i);
    }
  }

  return false;
};

// Second try, but still O(n^2)
var canJump = function(nums) {
  let jumps = nums.slice();

  if ((jumps.indexOf(0) === -1) || (jumps.indexOf(0) === jumps.length - 1)) {
    return true;
  }

  for (var i = 1; jumps.indexOf(0) - i > -1; i++) {
    if (jumps[jumps.indexOf(0) - i] > i) {
      jumps[jumps.indexOf(0)] = -1;
      return canJump(jumps);
    }
  }

  return false;
}

// From discussion, O(n)
var canJump = function(nums) {
  let max = 0;
  let target = nums.length - 1;

  for (var i = 0; i < nums.length; i++) {
    max = Math.max(max, i + nums[i]);

    if (max >= target) return true;
    if (max <= i && nums[i] === 0) return false;
  }

  return false;
};
