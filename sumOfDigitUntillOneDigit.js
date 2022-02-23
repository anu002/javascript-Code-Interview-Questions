/* Input : 1234
Output : 1
Explanation : The sum of 1+2+3+4 = 10, 
              digSum(x) == 10
              Hence ans will be 1+0 = 1 */
             
 function digitSum(num)
 {
 let sum = 0;
 while(num >0 || sum >9)
 {
   if(num == 0)
   {
    num = sum;
    sum = 0;
   }
   sum = sum + num%10;
   num = parseInt(num/10);
   //let k = digitSum(sum);
 }
 
  return sum;
 
 }
console.log(digitSum(1234));
