const getMaxP = (arr) => {
  sortedArr = arr.sort((a, b) => b - a);
  let maxP = 0;
  for (let i = 0; i < sortedArr.length - 2; i++) {
    if (sortedArr[i] < sortedArr[i + 1] + sortedArr[i + 2]) {
      maxP = Math.max(maxP, sortedArr[i] + sortedArr[i + 1] + sortedArr[i + 2]);
    }
  }
  if (maxP) console.log(maxP);
  else console.log('0');
};
console.log('getMaxP:');
console.log('[21, -11, 10, -5, 20]');
getMaxP([21, -11, 10, -5, 20]);

const getLargestNumber = (arr) => {
  arr.sort((first, second) => {
    let firstsecond = '' + first + second;
    let secondfirst = '' + second + first;
    return firstsecond > secondfirst ? -1 : 1;
  });
  let largestNumber = arr.join('');
  console.log(largestNumber);
};
console.log('getLargestNumber:');
console.log('[3, 30, 34, 5, 9, 1, 123, 123, 4]');
getLargestNumber([3, 30, 34, 5, 9, 1, 123, 123, 4]);

const diagSort = (mat) => {
  let y = mat.length,
    x = mat[0].length - 1,
    diag = new Array(y);
  let k;
  for (let i = 2 - y; i < x; i++) {
    k = 0;
    for (let j = 0; j < y; j++)
      if (i + j >= 0 && i + j <= x) diag[k++] = mat[j][i + j];
    diag.sort((a, b) => a - b);
    k = 0;
    for (let j = 0; j < y; j++)
      if (i + j >= 0 && i + j <= x) mat[j][i + j] = diag[k++];
  }
  for (let i = 0; i < mat.length; i++) {
    console.log(mat[i]);
  }
};

console.log('diagSort:');
console.log(`[[3, 3, 1, 1],
[2, 2, 1, 2],
[1, 1, 1, 2]]
`);
diagSort([
  [3, 3, 1, 1],
  [2, 2, 1, 2],
  [1, 1, 1, 2],
]);
