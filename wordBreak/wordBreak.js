// Does not pass LeetCode time constraint
/*
var wordBreak = function(s, wordDict) {
  if (s === '') return true;

  var strings = [];
  for (var i = 0; i < wordDict.length; i++) {
    if (s.slice(0, wordDict[i].length) === wordDict[i]) {
      var string = s.slice(wordDict[i].length);
      strings.push(string);
    }
  }

  var result = false;
  for (var j = 0; j < strings.length; j++) {
    result = result || wordBreak(strings[j], wordDict);
  }

  return result;
};
*/

// Using arrays, 112 ms and 41 mb
/*
var wordBreak = function(s, wordDict) {
  var indexes = [0];
  var lengths = wordDict.map((word) => word.length);

  for (let idx of indexes) {
    for (let length of lengths) {
      if (wordDict.includes(s.slice(idx, idx + length)) && !indexes.includes(idx + length)) {
        indexes.push(idx + length);
      }
    }
  }

  return indexes.includes(s.length);
};
*/

// Using Sets to avoid duplicates, 76 ms and 39.2 mb
var wordBreak = function(s, wordDict) {
  const indexes = new Set([0]);
  const lengths = new Set(wordDict.map((word) => word.length));
  const words = new Set(wordDict);

  for (let idx of indexes) {
    for (let length of lengths) {
      if (words.has(s.slice(idx, idx + length))) {
        indexes.add(idx + length);
      }
    }
  }

  return indexes.has(s.length);
};
