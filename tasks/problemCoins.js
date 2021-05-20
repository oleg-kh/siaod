const problemCoins = (arr) => {
  let result = 0;
  arr.sort((a, b) => a - b);
  for (let i = arr.length / 3; i < arr.length; i = i + 2) {
    result += arr[i];
  }
  return result;
};

console.log('problemCoins:');
console.log(`[2, 4, 1, 2, 7, 8]`);
console.log(problemCoins([2, 4, 1, 2, 7, 8]));
