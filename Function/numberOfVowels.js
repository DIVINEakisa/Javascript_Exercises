function countVowel(word) {
  let str = word.split("");
  console.log(str);
  let vowels = ["a", "i", "u", "o", "e"];
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    let cv = vowels.includes(str[i]);
    if (cv) {
      result++;
    }
  }
  return result;
}
console.log(countVowel("the quick brown fox"));
