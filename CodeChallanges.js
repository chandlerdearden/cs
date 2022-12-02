let array = [28, 43, -12, 30, 4, 0, 12]
let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}

console.log(value)
// Run time of O(n^2) //

function hasUniqueChars(word) {
  let uniqueChars = new Set([])
  for (let i = 0; i < word.length; i++) {
    uniqueChars.add(word[i])
  }
  return uniqueChars.size === word.length
}
console.log(hasUniqueChars("Moonday"))

// Run time of O(1) //

function isPangram(str) {
  let value = str.toLowerCase().replace(/[^a-z]/g, "");  
  return new Set(value).size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"))

// Run time of O(1) //

function findLongestWord (arr) {
  let longestWord = ""
  for (let i = 0; i < arr.length; i++) {
    let length = arr[i].length
    if(length > longestWord.length) {
      longestWord = arr[i]
    } 
  }
  return longestWord.length
}

console.log(findLongestWord(["hi","longerword", "hello"]))

// Run Time of O(1)
