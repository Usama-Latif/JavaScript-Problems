// you are required to implement a function generateHash that generate a hash tag from a given input string. The hash should be converted as follows:
// The input string should be converted to a hash tag format , where each word is capitalized and concatenated together without spaces.
// if the length of input string is greater than 280 characters or if input string is empty or contains only whitespaces, the function should return false.
// Otherwise the function should return the generated hash tag Prefixed with #.



// const str = 'this is usama';
// console.log(generateHash(str));

// function generateHash(str) {
//     let toArr = str.split(' '); // [ 'this', 'is', 'usama' ]
//     let upperArr = "#";
//     for (let i = 0; i < toArr.length; i++) {
//         let upper = toArr[i][0].toUpperCase();
//         upperArr += upper.concat(toArr[i].slice(1));
//     }
//     return upperArr;
// }








const str = 'this is usamfffffffsshfjksfhks fskjfskfhsifwuiru cshcksfh ruwisfs fhsrywiks kfjskfhuiruhwsikscskfuskfhskfhs fuiifhskfhsifhsifhsfsjkfhsk fsifuhskfhskhieuirhifscsjkchsfhskfhsk suifwirwiryuytwsfssbksjfssfsbvssbvskfhsrfieurhurytsksbvsfsifyu';
console.log(generateHash(str));

function generateHash(str) {
    if (str.length > 280 || str.length == 0) {
        return console.log('false');
    }
    else {
        let toArr = str.split(' '); // [ 'this', 'is', 'usama' ]
        let upperArr = "#";
        for (let i = 0; i < toArr.length; i++) {
            let upper = toArr[i][0].toUpperCase();
            upperArr += upper.concat(toArr[i].slice(1));
        }
        return upperArr;
    }

}