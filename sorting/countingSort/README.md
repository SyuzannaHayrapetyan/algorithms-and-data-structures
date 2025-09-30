Counting Sort
Counting Sort is a non-comparison-based sorting algorithm.
It works by counting the number of occurrences of each unique element in the array, then using this information to place each element in its correct position.
This algorithm is efficient when the range of input values (max - min) is not significantly larger than the number of elements.

Example
Given the array:
[4, 2, 2, 8, 3, 3, 1]
Step by step:
Find the minimum = 1, maximum = 8.
Create a counting array of size (max - min + 1) = 8.
Count occurrences:
Count array → [0, 1, 2, 2, 1, 0, 0, 1]
(Index i corresponds to the value i+min)
Build the sorted array using the counts:
[1, 2, 2, 3, 3, 4, 8]
Result:
[1, 2, 2, 3, 3, 4, 8]

Time Complexity
Worst case: O(n + k)
Average case: O(n + k)
Best case: O(n + k)
(where n = number of elements, k = range of input values)
Space Complexity
O(k) (extra memory required for the counting array)
Advantages
Very fast for integers or small ranges
Runs in linear time O(n + k), better than O(n log n) comparison sorts for small ranges
Stable (can preserve the order of equal elements, if implemented properly)
Disadvantages
Not efficient when the range k is much larger than n
Uses extra memory proportional to the range of input values
Works only for discrete values (integers, characters, etc.), not for general comparisons
