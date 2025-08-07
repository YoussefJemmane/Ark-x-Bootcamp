let array = [1, 2, 6, 4, 5, 8, 2, 12];

function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// console.log(sum(array));

function countEven(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return count;
}

// console.log(countEven(array));

function double(array){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i]*2)
    }
    return newArray
}
// console.log(double(array))