class Solution {
    longestSubarray(arr, k) {
        let nmap = new Map(); // prefixSum -> first index
        let sum = 0;
        let Lent = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];

            if (sum === k) {
                Lent = Math.max(Lent, i + 1);
            }

            if (nmap.has(sum - k)) {
                Lent = Math.max(Lent, i - nmap.get(sum - k));
            }

            if (!nmap.has(sum)) {
                nmap.set(sum, i);
            }
        }

        return Lent;
    }
}
