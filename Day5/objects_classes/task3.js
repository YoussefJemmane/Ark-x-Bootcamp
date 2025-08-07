const mostOccurred = (arr) => {
  const frequency = {};
  let maxCount = 0;
  let mostOccurredNum;

  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxCount) {
      maxCount = frequency[num];
      mostOccurredNum = num;
    }
  }

  return mostOccurredNum;
};

console.log(mostOccurred([4, 2, 6, 6, 2])); 
