//replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
//then capitalize every vowel in this new string (a, e, i, o, u)
//and finally return this modified string.
//input: hello*3
//output: Ifmmp*3
// input: fun times!
//output: gvO Ujnft!

//Note:
//String.charCodeAt() -> convert string to ascii code
//String.fromCharCode() -> convert ascii code to string
//A --> 65, Z --> 90, a --> 97, z --> 122
export const LetterChanges = (str) => {
    return [...str].map(ch => {
        if (isAlphabet(ch)){
            ch = capitalizeVowel(nextCharacter(ch));
        }
        return ch;
    }).join('');
};

const isAlphabet = (ch) => {
  return (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) || (ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122);
};

const nextCharacter = (ch) => {
    if (ch === 'z'){
        return 'a';
    }
    else if (ch === 'Z'){
        return 'A';
    }
    return String.fromCharCode((ch.charCodeAt(0) + 1));
};

const capitalizeVowel = (ch) => {
    const vowels = ['a','e','i','o','u'];
    if (vowels.indexOf(ch) > -1){
        return ch.toUpperCase();
    }
    return ch;
};