function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if (arr[i - 1] > arr[i]) {
                // Swap
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                swapped = true;
            }
        }
        n--; // Each pass places the largest element at the end
    } while (swapped);
    return arr;
}

// Example usage:
const numbers = [5, 2, 9, 1, 5, 6];
console.log(bubbleSort(numbers)); // Output: [1, 2, 5, 5, 6, 9]