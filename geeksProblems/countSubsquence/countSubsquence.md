# Count subsequences of type a^i, b^j, c^k 

Given a string S, the task is to count number of subsequences of the form aibjck, where i >= 1, j >=1 and k >= 1.

Note: 
- Two subsequences are considered different if the set of array indexes picked for the 2 subsequences are different.
- For large test cases, the output value will be too large, return the answer MODULO 10^9+7

 Example 1:

###  Input:
> S = "abbc"
> Output: 3
> Explanation: Subsequences are abc, abc and abb

## Your Task:
You don't need to read input or print anything. Your task is to complete the function fun() which takes the string S as input parameter and returns the number of subsequences which follows given condition.


> Expected Time Complexity: O(Length of String).
> Expected Auxiliary Space: O(1) .


[link](https://practice.geeksforgeeks.org/problems/count-subsequences-of-type-ai-bj-ck4425/1)