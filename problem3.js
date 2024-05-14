// write a function called countChar that takes two parameters: a string and a character to count. The should return the number of times the specified character appears in the string.
// console.log(countChar('usama' , 'a')); output: 2

// The function should be case sensitive
// The function should handle both lowercase and uppercase characters.



// Solution 1
// console.log(countChar('usamaUUU', 'U'));

// function countChar(word, char) {
//         let count = 0;
//         for (let i = 0; i < word.length; i++) {
//             if (word[i] == char) {
//                 count++;
//             }
//         }
//         return count;
// }


// Solution 2
// console.log(countChar('usAAma', 'A'));

// function countChar(str, char) {
//     let arr = str.split('');
//     let b = arr.filter((el) => el === char);
//     let c = b.length;
//     return c;
// }



// solution 3
console.log(countChar('UsaAAma', 'a'));

function countChar(str, char) {
    let arr = str.split('');
    return res = arr.reduce((acc, curr) => {
        if (curr === char) {
            acc++;
        }
        return acc;
    }, 0);
}






