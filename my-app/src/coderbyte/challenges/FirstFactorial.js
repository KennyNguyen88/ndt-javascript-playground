//return the factorial of it
//input: 4
//output: 4*3*2*1 = 24

//Note:
export const FirstFactorial = (num) => {
    return num < 2 ? 1 : num * FirstFactorial(num-1);
};

export default FirstFactorial;