class Solution:
    def longestSubarray(self, arr, k):  
        # code here
        Lent=0
        sum=0
        nmap={0:1}
        
        for i in range(len(arr)):
            sum+=arr[i]
            if sum==k:
                Lent=max(Lent, i+1)
            if (sum-k) in nmap:
                Lent=max(Lent, i-nmap[sum-k])
            if not(sum in nmap):
                nmap[sum]=i
        return Lent
    
