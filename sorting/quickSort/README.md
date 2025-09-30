Quick Sort
Quick Sort is a highly efficient divide-and-conquer sorting algorithm.
It works by selecting a pivot element from the array and partitioning the other elements into two subarrays:
elements less than or equal to the pivot
elements greater than the pivot
The process is then applied recursively to the two subarrays until the entire array is sorted.

Example
Given the array:
[10, 80, 30, 90, 40, 50, 70]
Choose a pivot (e.g., the last element 70).
Partition the array into two parts:
[10, 30, 40, 50] (less than 70) and [80, 90] (greater than 70).
Recursively apply Quick Sort to both parts:
Sort [10, 30, 40, 50] → [10, 30, 40, 50] (already sorted)
Sort [80, 90] → [80, 90] (already sorted)
Combine with the pivot:
[10, 30, 40, 50] + [70] + [80, 90]
Result:
[10, 30, 40, 50, 70, 80, 90]

Time Complexity
Worst case: O(n²) (occurs when the pivot is always the smallest or largest element)
Average case: O(n log n)
Best case: O(n log n) (balanced partitioning)
Space Complexity
O(log n) (due to recursion stack)
Advantages
Very fast in practice, usually faster than Merge Sort for most inputs
In-place sorting (does not require much extra memory)
Good performance on average
Disadvantages
Worst-case O(n²) if pivot selection is poor
Not stable (equal elements may not retain original order)
