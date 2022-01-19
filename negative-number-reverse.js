const number = -547679
//output 976745

const reverseNumber = number.toString().split('').reverse().join('');

console.log(parseInt(reverseNumber)*Math.sign(number));