var twoSum = function(nums,target){
    let numList = new Map();

    for (let i =0;i < nums.length;i++){
        const currentNum = nums[i];
        const complement = target - currentNum;
        
        if(numList.has(complement)){
            return [numList.get(complement) , i]
        }
        else{
            numList.set(currentNum,i)
        }
    }
    
};

const result = twoSum([2,7,11,15],9);
console.log(result)