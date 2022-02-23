let arr = [10, 4, 3, 50, 23, 90];
let len = arr.length;
let firstNum= Math.max(); //-Infinity;
let secNum = Math.max();
let thirdNum = Math.max();

for(let i=0;i<len;i++)
{
 if(firstNum<arr[i])
 {
 // console.log("assad");
   thirdNum = secNum;
   secNum = firstNum;   
   firstNum= arr[i];
 }
 else if(secNum<arr[i])
 {
 thirdNum = secNum;
 secNum = arr[i]
 }
else if(thirdNum <arr[i])
 {
  thirdNum = arr[i];
 }

}
 console.log(firstNum,secNum,thirdNum);
