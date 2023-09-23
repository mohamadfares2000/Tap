function findTwoSumIndices(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
  }

  
  const nums = [7, 4, 55, 11];
  const target = 66;
  const result = findTwoSumIndices(nums, target);
  console.log(result); 
  