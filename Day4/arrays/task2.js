function sockMerchant(socks) {
  const colorCount = {};
  let pairs = 0;

  for (const sock of socks) {
    if (colorCount[sock]) {
      colorCount[sock]++;
    } else {
      colorCount[sock] = 1;
    }
  }

  for (const count of Object.values(colorCount)) {
    pairs += Math.floor(count / 2);
  }

  return pairs;
}

const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const totalPairs = sockMerchant(socks);
console.log(totalPairs);
