Bubble Sort
Bubble Sort is one of the simplest sorting algorithms. It works by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order.
On each pass, the largest element “bubbles up” to the end of the list (like a bubble rising in water).
This process is repeated until the entire list is sorted in ascending order.

Example
Given the array:
[5, 3, 8, 4, 2]
Compare 5 and 3 → swap → [3, 5, 8, 4, 2]
Compare 5 and 8 → no swap → [3, 5, 8, 4, 2]
Compare 8 and 4 → swap → [3, 5, 4, 8, 2]
Compare 8 and 2 → swap → [3, 5, 4, 2, 8]
After the first pass, the largest element (8) is already at the end.
We repeat the same process for the remaining elements until the array is fully sorted.

Time Complexity
Worst case: O(n²)
Average case: O(n²)
Best case (already sorted array): O(n)
Space Complexity
O(1) – In-place sorting, no extra memory required
Advantages
Very easy to implement
Can be optimized to stop early if the array is already sorted
Disadvantages
Inefficient for large datasets
Time complexity is relatively high (O(n²))
