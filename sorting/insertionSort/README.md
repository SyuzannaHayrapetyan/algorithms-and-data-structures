Insertion Sort
Insertion Sort is a simple sorting algorithm based on the idea of inserting each new element into its proper place within an already sorted portion of the array.
We move through the array from left to right.
At each step, the current element is compared with the elements in the sorted part and inserted in the correct position.
This is similar to sorting playing cards in your hand, where each new card is placed in the right spot among the cards you’re already holding.

Example
Given the array:
[5, 3, 8, 4, 2]
[5] is already sorted.
Insert 3 before 5 → [3, 5]
Insert 8 at the end → [3, 5, 8]
Insert 4 before 5 → [3, 4, 5, 8]
Insert 2 before all → [2, 3, 4, 5, 8]
The array is now fully sorted.

Time Complexity
Worst case: O(n²)
Average case: O(n²)
Best case (already sorted array): O(n)
Space Complexity
O(1) – In-place sorting, no extra memory required
Advantages
Easy to implement
Efficient for small datasets
Requires no extra memory
Disadvantages
Inefficient for large datasets (O(n²))
