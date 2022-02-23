let num = 687;
let reverse = 0
function reverseNumber(num)
{
while(num != 0)
{
  let lastDigit = num %10;
  reverse = (reverse * 10) + lastDigit;
  num = parseInt(num/10);
  
}
return reverse;
}



console.log(reverseNumber(-9217));
