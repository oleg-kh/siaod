const fifteenPuzzle = (array) => {
  let queue = [],
    chekPosition = [];
  const answer = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0],
  ];

  queue.push({
    array: array,
    path: [],
    opt: 0,
  });
  while (queue.length > 0) {
    const current = queue.shift();

    chekPosition.push(current.array);
    if (JSON.stringify(current.array) === JSON.stringify(answer)) {
      return current.path;
    }

    let indexOfZeros;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (current.array[i][j] === 0) {
          indexOfZeros = [i, j];
          break;
        }
      }
    }

    if (indexOfZeros[0] < 3 && current.opt !== 2) {
      let newArray = JSON.parse(JSON.stringify(current.array));
      newArray[indexOfZeros[0]][indexOfZeros[1]] =
        newArray[indexOfZeros[0] + 1][indexOfZeros[1]];
      newArray[indexOfZeros[0] + 1][indexOfZeros[1]] = 0;
      const action = newArray[indexOfZeros[0]][indexOfZeros[1]];
      let newPath = JSON.parse(JSON.stringify(current.path));
      newPath.push(action);
      if (finder(chekPosition, newArray)) {
        queue.push({
          array: newArray,
          path: newPath,
          opt: optimal(newArray),
        });
      }
    }
    if (indexOfZeros[0] > 0 && current.opt !== 1) {
      let newArray = JSON.parse(JSON.stringify(current.array));
      newArray[indexOfZeros[0]][indexOfZeros[1]] =
        newArray[indexOfZeros[0] - 1][indexOfZeros[1]];
      newArray[indexOfZeros[0] - 1][indexOfZeros[1]] = 0;
      const action = newArray[indexOfZeros[0]][indexOfZeros[1]];
      let newPath = JSON.parse(JSON.stringify(current.path));
      newPath.push(action);
      if (finder(chekPosition, newArray)) {
        queue.push({
          array: newArray,
          path: newPath,
          opt: optimal(newArray),
        });
      }
    }
    if (indexOfZeros[1] < 3 && current.opt !== 4) {
      let newArray = JSON.parse(JSON.stringify(current.array));
      newArray[indexOfZeros[0]][indexOfZeros[1]] =
        newArray[indexOfZeros[0]][indexOfZeros[1] + 1];
      newArray[indexOfZeros[0]][indexOfZeros[1] + 1] = 0;
      const action = newArray[indexOfZeros[0]][indexOfZeros[1]];
      let newPath = JSON.parse(JSON.stringify(current.path));
      newPath.push(action);

      if (finder(chekPosition, newArray)) {
        queue.push({
          array: newArray,
          path: newPath,
          opt: optimal(newArray),
        });
      }
    }
    if (indexOfZeros[1] > 0 && current.opt !== 3) {
      let newArray = JSON.parse(JSON.stringify(current.array));
      newArray[indexOfZeros[0]][indexOfZeros[1]] =
        newArray[indexOfZeros[0]][indexOfZeros[1] - 1];
      newArray[indexOfZeros[0]][indexOfZeros[1] - 1] = 0;
      let action = newArray[indexOfZeros[0]][indexOfZeros[1]];
      let newPath = JSON.parse(JSON.stringify(current.path));
      newPath.push(action);
      if (finder(chekPosition, newArray)) {
        queue.push({
          array: newArray,
          path: newPath,
          opt: optimal(newArray),
        });
      }
    }
    queue.sort((a, b) => {
      return a.opt - b.opt;
    });
  }
};
const finder = (array, sought) => {
  let k = 0;
  array.map((item) => {
    if (JSON.stringify(item) === JSON.stringify(sought)) {
      k++;
      return false;
    }
  });
  return k === 0;
};

const optimal = (array) => {
  let counter = 0;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let o = 0; o < 4; o++) {
        if (array[o].indexOf(4 * i + j + 1) !== -1) {
          counter +=
            Math.abs(i - o) + Math.abs(j - array[o].indexOf(4 * i + j + 1));
        }
      }
    }
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        array[i][j] > array[i][j + 1] &&
        array[i][j] !== 0 &&
        array[i][j + 1] !== 0
      ) {
        counter += 2;
      }
    }
  }

  if (array[3][3] !== 12 || array[3][3] !== 15) counter += 2;
  return counter;
};

let inv = 0;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 13, 9, 11, 12, 10, 14, 15, 0];
for (let i = 0; i < 16; i++) {
  if (arr[i]) for (let j = 0; j < i; ++j) if (arr[j] > arr[i]) inv++;
}
for (let i = 0; i < 16; ++i) {
  if (arr[i] === 0) inv += 1 + i / 4;
}

let arr1 = Array();
let k = 0;
for (let i = 0; i < 4; i++) {
  arr1[i] = Array();
  for (let j = 0; j < 4; j++) {
    arr1[i][j] = arr[k];
    k++;
  }
}
console.log('fifteenPuzzle:');
console.log(arr1);

if (inv & 1) {
  console.log('Решения нет');
} else {
  console.log(fifteenPuzzle(arr1).join(','));
}
