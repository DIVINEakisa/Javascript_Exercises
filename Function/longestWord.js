function longestWord(str) {
  let word = str.split(" ").sort(function (a, b) {
    return b.length - a.length;
  });
  return word[0];
}
console.log(longestWord("the quick brown fox aandsm"));
