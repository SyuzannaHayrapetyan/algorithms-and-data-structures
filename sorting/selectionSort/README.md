Selection Sort
Selection Sort is a simple and intuitive sorting algorithm.
It works as follows: in each step, find the minimum (or maximum, depending on the order) element from the unsorted part of the array and place it in its correct position.
This process repeats until the entire array is sorted.

Example
Given the array:
[64, 25, 12, 22, 11]
Step by step:
Minimum is 11 → swap with 64 → [11, 25, 12, 22, 64]
Next minimum is 12 → swap with 25 → [11, 12, 25, 22, 64]
Next minimum is 22 → swap with 25 → [11, 12, 22, 25, 64]
Next is 25 → already in the right place
Last 64 → already in the right place
Result:
[11, 12, 22, 25, 64]

Time Complexity
Worst case: O(n²)
Average case: O(n²)
Best case: O(n²) (no optimization, always performs the same number of comparisons)
Space Complexity
O(1) (in-place sorting, requires no extra memory)
Advantages
Very simple to implement
Useful for small arrays or when memory is limited
Disadvantages
Inefficient for large datasets due to O(n²) complexity
Does not take advantage of partially sorted arrays
