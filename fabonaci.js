//0,1,2,3,5,8,13
let number1 = 0;
let number2 = 1;
console.log(`fabonaci series:`)
console.log(number1);
console.log(number2);
for(let i = 0;i< 10; i++)
{
    let number3 = number1+number2;
     number1 = number2;
     number2 = number3;
     console.log(`${number3}`);

}