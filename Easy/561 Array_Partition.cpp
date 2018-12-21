class Solution {
public:
    int arrayPairSum(vector<int>& nums) {
        int sums = 0;
        sort(nums.begin(), nums.end());
        for(int i =0; i<nums.size(); i = i+2){
            sums += nums[i];
        }
        return sums;
    }
};
