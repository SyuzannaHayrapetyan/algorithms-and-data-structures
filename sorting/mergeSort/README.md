Merge Sort
Merge Sort is a divide-and-conquer sorting algorithm.
It works by dividing the array into smaller subarrays, sorting each subarray, and then merging them back together in the correct order.
The process continues recursively until the array is fully sorted.

Example
Given the array:
[38, 27, 43, 3, 9, 82, 10]
Step by step:
Divide the array into halves:
[38, 27, 43, 3] and [9, 82, 10]
Continue dividing:
[38, 27] → [38], [27]
[43, 3] → [43], [3]
[9, 82, 10] → [9], [82, 10] → [82], [10]
Merge sorted subarrays:
[38] + [27] → [27, 38]
[43] + [3] → [3, 43]
[82] + [10] → [10, 82]
Merge again:
[27, 38] + [3, 43] → [3, 27, 38, 43]
[9] + [10, 82] → [9, 10, 82]
Final merge:
[3, 27, 38, 43] + [9, 10, 82] → [3, 9, 10, 27, 38, 43, 82]
Result:
[3, 9, 10, 27, 38, 43, 82]

Time Complexity
Worst case: O(n log n)
Average case: O(n log n)
Best case: O(n log n) (even if already sorted)
Space Complexity
O(n) (extra memory is required for merging)
Advantages
Very efficient, guaranteed O(n log n) performance
Stable sorting algorithm (keeps equal elements in original order)
Works well for large datasets
Disadvantages
Requires additional memory proportional to input size
Recursive implementation may add overhead
