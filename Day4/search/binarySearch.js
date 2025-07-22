// Binary Search : Develop an advanced search algorithm suitable for sorted arrays.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Return the index of the found element
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Return -1 if the element is not found
}

// Example usage:
const sortedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 6
const index = binarySearch(sortedNumbers, target);
console.log(index); // Output: 5 (the index of the element 6 in the array)