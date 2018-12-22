//return the largest word in the string
//If there are two or more words that are the same length, return the first word from the string with that length
//Ignore punctuation and assume sen will not be empty.
//input: fun&!! time
//output: time
//input: I love dogs
//output: love
//A --> 65, Z --> 90, a --> 97, z --> 122
export const LongestWord = (sen) => {
    const words = sen.split(' ');
    let maxChar = 0;
    let maxWord = '';
    words.map(word => {
        if (maxChar < countCharacterOnly(word)){
            maxChar = countCharacterOnly(word);
            maxWord = word;
        }
    })
    return maxWord;
};

const isAlphabet = (ch) => {
    return (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) || (ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122);
};

const countCharacterOnly = (word) => {
    return [...word].reduce((acc,current) => {
        if(isAlphabet(current)){
            return acc +1;
        }
    },0)
};

export default LongestWord;

// from cjordanball
// function LongestWord(sen) {
//
//     sen = sen.trim();
//     sen = sen.replace(/[^a-zA-Zsd]/g, '');
//
//     var arr = sen.split(' ');
//
//     arr.sort(function(a, b) {return b.length - a.length});
//
//     return arr.shift();
//
//     // code goes here
//     return sen;
//
// }