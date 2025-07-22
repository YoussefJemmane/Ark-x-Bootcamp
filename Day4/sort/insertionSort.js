// Insertion Sort : Create an algorithm that constructs a sorted array incrementally.
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key; // Place the key in its correct position
    }
    return arr;
}

// Example usage:
const numbers = [12, 11, 13, 5, 6];
console.log(insertionSort(numbers)); // Output: [5, 6, 11, 12, 13]