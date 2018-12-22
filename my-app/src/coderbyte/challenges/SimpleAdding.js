//return add up all the numbers from 1 to num
//input: 4
//output: 1+2+3+4=10

export const SimpleAdding = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
};

export default SimpleAdding;