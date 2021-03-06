class Solution {
public:
    vector<int> sortArrayByParityII(vector<int>& A) {
        
        for( int i=0, j=1; i<A.size() && j<A.size();){
            if(A[i]%2 == 0){
                i = i+2;
            }
            
            if(A[j]%2 == 1){
                j = j+2;
            }
            
            else{
                swap(A[i],A[j]);
            }
        }
        
        return A;
    }
};
