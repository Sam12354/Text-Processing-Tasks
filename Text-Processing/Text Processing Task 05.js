// Write a function that receives a single string and replace 
// any sequence of the same letters with a single corresponding letter.

function replaceRepeatingChars(str) {
    let result = '';
    let previousChar = '';
 
    for (let char of str) {
        if (previousChar != char) {
            previousChar = char;
            result += char;
        }
    }
    console.log(result);
}
replaceRepeatingChars
('aaaaabbbbbcdddeeeedssaa')
// ('qqqwerqwecccwd')
