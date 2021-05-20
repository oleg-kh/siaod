const problemBalloons = (points) => {
  if (points.length == 0) return 0;

  points.sort((a, b) => a[1] - b[1]);

  let arrowPos = points[0][1];
  let count = 1;
  for (let i = 1; i < points.length; i++) {
    if (arrowPos >= points[i][0]) {
      continue;
    }
    count++;

    arrowPos = points[i][1];
  }
  return count;
};
console.log('problemBalloons:');
console.log(`[[10, 16],
[2, 8],
[1, 6],
[7, 12]]`);
console.log(
  problemBalloons([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
);
