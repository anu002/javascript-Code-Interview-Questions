const text = "Monkey";

//With the help of js method
const reverseText= text.split('').reverse().join('').toUpperCase();
if(text.toUpperCase()==reverseText)
{
    console.log("number is plaidrom ");
}

else{
    console.log("number is not a paldirom number");
}

const str = "MADAM";
console.log(checkPalidrom(str));
function checkPalidrom(str)
{
   let len =  str.length;
   let msg;
   for(let i = 0; i<len/2;i++)
   {
  
   (str[i]===str[len-1-i])? msg =`${str} is a Palindrom`:  msg =`${str} is a not a Palindrom`;
   
   }
   return msg;
}

