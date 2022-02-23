/* Input: n = 5
Output: Sum of digits in numbers from 1 to 5 = 15 */
const sumDigitNum = (num) =>
{
let sum =0;
for(let i = 1 ;i<=num;i++)
{
 sum = sum +i;
 
}
return sum;
}

console.log(sumDigitNum(5));

//Second way

let data = [...Array(6).keys()].reduce((acc,curr) =>{
  return acc+curr;
},0)
console.log(data);
