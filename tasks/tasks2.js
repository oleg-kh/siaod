const winString = (str1, str2) => {
  if (str1.length === 0 || str2.length === 0) {
    return `empty string`;
  } else if (str1.length !== str2.length) {
    return `different length`;
  }
  let arrChar1 = str1.split('').sort();
  let arrChar2 = str2.split('').sort();
  if (
    arrChar1.every((el, idx) => el <= arrChar2[idx]) ||
    arrChar2.every((el, idx) => el <= arrChar1[idx])
  ) {
    return true;
  }
  return false;
};
console.log('winString:');
console.log(`'abe', 'xya'`);
console.log(winString('abe', 'xya'));

const isPolindrome = (string) => {
  return string === string.split('').reverse().join('');
};

const longestPolindrome = (string) => {
  if (string.length === 0) {
    return `it is empty`;
  }
  let longest = '';
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      let substr = string.slice(i, j);
      if (isPolindrome(substr)) {
        if (longest.length < substr.length) {
          longest = substr;
        }
      }
    }
  }
  if (longest.length === 0) {
    return `no polindrome`;
  }
  return longest;
};
console.log('longestPolindrome:');
console.log('babad');
console.log(longestPolindrome('babad'));

const subCount = (string) => {
  let result = [];
  let length = string.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length + 1; j++) {
      let sub = string.slice(i, j);
      for (let i = 0; i < sub.length; i++) {
        if (sub.slice(0, i) === sub.slice(i, sub.length)) {
          result.push(sub);
          continue;
        }
      }
    }
  }
  return new Set(result).size;
};

console.log('subCount:');
console.log('abcabcabc');
console.log(subCount('abcabcabc'));
