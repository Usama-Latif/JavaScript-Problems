// write a function to determine whether given string is palindrome or not

let str = 'Level';

function isPalindrome(str) {
    const str1 = str.toLowerCase();
    let reverse = '';
    for (let i = str1.length - 1; i >= 0; i--) {
        reverse += str1[i];
    }
    if (str1 === reverse) {
        console.log('Yes it is palidrome');
    }
    else {
        console.log('Not Palindrome')
    }
}

isPalindrome(str);