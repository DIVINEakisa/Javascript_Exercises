function capitalizeFirstLetterOfEcahWord(word) {
  let words = word.split(/[,-_  ]/);

  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join("");
}
console.log(capitalizeFirstLetterOfEcahWord("the quick brown fox"));
console.log(capitalizeFirstLetterOfEcahWord("the_stealth_warrior"));
