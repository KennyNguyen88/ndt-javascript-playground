//capitalize the first letter of each word
//input: hello world
//output: Hello World

//Note:
//String.slice(begin,end): return new string
export const LetterCapitalize = (str) => {
    return str.toLowerCase().split(' ').map(word => {
        return capitalizeFirstLetter(word);
    }).join(' ');
};

const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
};

export default LetterCapitalize;