function twosums(nums, target) {
    numsIndexes = {};
  
    for (let i = 0; i < nums.length; i += 1) {
      let currentDifference = target - nums[i];
  
      if (numsIndexes[currentDifference] !== undefined && numsIndexes[currentDifference] !== i) {
        return [i, numsIndexes[currentDifference]];
      } else {
        numsIndexes[nums[i]] = i;
      }

      if (numsIndexes[currentDifference] == undefined) {
        return false
      }
    }
  };

 var result =  twosums([50,20,40,50,60,70],100);
  console.log(result);