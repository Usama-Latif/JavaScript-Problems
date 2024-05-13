// write a function findLongestWord that takes a string as input and returns the longest word in the string . If there are multiple longest word, return the first one encountered.



let str = "Find the 23 Longest encountered word and displayhereaaaa";

function findLongestWord(str) {
    let toArr = str.split(' '); //['Find','the','23','Longest','encountered','word','and','displayhereaaaa']
    temp = '';
    for (let i = 0; i < toArr.length; i++) {
        if (toArr[i].length > temp.length) {
            temp = toArr[i];
        }
    }
    return temp;
}

console.log(findLongestWord(str));
