function group(numbers) {
  const result = [];

  for (const num of numbers) {
    const group = result.find((sub) => sub[0] === num);
    if (group) {
      group.push(num);
    } else {
      result.push([num]);
    }
  }

  return result;
}
console.log(group([3, 2, 3, 5,3, 7, 8, 7, 5]));
