//return the string in reversed order.
//input: Hello World and Coders
//output: sredoC dna dlroW olleH

//Note: [...str] -> convert string to char[]
export const FirstReverse = (str) => {
    return [...str].reverse().join('');
};

export default FirstReverse;