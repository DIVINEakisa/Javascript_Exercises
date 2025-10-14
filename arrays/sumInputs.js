function sumInputs()


Converting a Roman numeral string to its decimal integer equivalent in JavaScript involves iterating through the Roman numeral and applying the rules of Roman numeral conversion.
The core idea is to process the Roman numeral from right to left (or left to right with lookahead) and handle the subtractive notation (e.g., IV = 4, IX = 9).
Here's a common approach using JavaScript:
JavaScript

function romanToInt(s) {
  const romanValues = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ]);

  let result = 0;
  let prevValue = 0;

  // Iterate from right to left
  for (let i = s.length - 1; i >= 0; i--) {
    const currentChar = s[i];
    const currentValue = romanValues.get(currentChar);

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
    prevValue = currentValue;
  }
  return result;
}

// Example Usage:
console.log(romanToInt("III"));   // Output: 3
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
Explanation:
romanValues Map:
A Map is used to store the integer value corresponding to each Roman numeral character. This provides efficient lookup.
result and prevValue:
result accumulates the final decimal value, and prevValue stores the value of the previously processed Roman numeral character (from right to left).
Iteration from Right to Left:
The for loop iterates through the Roman numeral string from the last character to the first. This simplifies handling the subtractive rule.
Subtractive Rule Logic:
If the currentValue is less than prevValue (e.g., 'I' before 'V' in 'IV'), it means a subtraction is occurring, so currentValue is subtracted from result.
Otherwise, currentValue is simply added to result.
prevValue Update:
prevValue is updated to currentValue for the next iteration.