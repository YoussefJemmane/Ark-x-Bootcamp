function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the found element
        }
    }
    return -1; // Return -1 if the element is not found
}

const numbers = [5, 3, 8, 4, 2];
const target = 4;
const index = linearSearch(numbers, target);
console.log(index); // Output: 3 (the index of the element 4 in the array)