const readline = require('readline-sync');

function makeCharTable(pattern) {
  let table = [];

  for (let i = 0; i < 65536; i++) {
    table.push(pattern.length);
  }

  for (let i = 0; i < pattern.length - 1; i++) {
    const charCode = pattern.charCodeAt(i);
    table[charCode] = pattern.length - 1 - i;
  }
  return table;
}

function makeOffsetTable(pattern) {
  let table = [];
  table.length = pattern.length;

  let lastPrefixPosition = pattern.length;

  for (let i = pattern.length; i > 0; i--) {
    if (isPrefix(pattern, i)) {
      lastPrefixPosition = i;
    }

    table[pattern.length - i] = lastPrefixPosition - 1 + pattern.length;
  }

  for (let i = 0; i < pattern.length - 1; i++) {
    const slen = suffixLength(pattern, i);
    table[slen] = pattern.length - 1 - i + slen;
  }
  return table;
}

function isPrefix(pattern, p) {
  for (let i = p, j = 0; i < pattern.length; i++, j++) {
    if (pattern[i] != pattern[j]) {
      return false;
    }

    return true;
  }
}

function suffixLength(pattern, p) {
  let len = 0;

  for (
    let i = p, j = pattern.length - 1;
    i >= 0 && pattern[i] == pattern[j];
    i--, j--
  ) {
    len += 1;
  }

  return len;
}
// O(m/n) or O(m+n)
function boyerMooreSearch(text, pattern) {
  if (pattern.length === 0) {
    return -1;
  }

  let charTable = makeCharTable(pattern);
  let offsetTable = makeOffsetTable(pattern);

  for (let i = pattern.length - 1, j; i < text.length; ) {
    for (j = pattern.length - 1; pattern[j] == text[i]; i--, j--) {
      if (j === 0) {
        return i;
      }
    }

    const charCode = text.charCodeAt(i);
    i += Math.max(offsetTable[pattern.length - 1 - j], charTable[charCode]);
  }

  return -1;
}

const text = readline.question('Введите строку: ');
const word = readline.question('Введите подстроку: ');

console.log(boyerMooreSearch(text, word));
