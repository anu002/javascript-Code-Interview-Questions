//Input : n = 687
//output : 21
const sum = (num) => {
let sum = 0;
while(num != 0)
{
sum = sum + num%10;
num = parseInt(num/10);

}
return sum;

}
console.log(sum(687));
