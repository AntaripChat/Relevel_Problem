function maxMoney(i,nums){

     if(i>=nums.length){
         return 0;
     }

     let choice1= maxMoney(i+1,nums);
     let choice2= nums[i]+maxMoney(i+2,nums);

     return Math.max(choice1,choice2);
 }

var rob = function(nums) {
    return maxMoney(0,nums);
};

// Question - https://leetcode.com/problems/house-robber/
