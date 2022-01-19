//Sort all even numbers in the Array without changing order of odd elements
///Input: arr[] = {4, 7, 2, 11, 15}
//Output: {2, 7, 4, 11, 15}
const array = [4, 7, 2, 11, 15];
var len = array.length;
let evenArray = [];
for(let i = 0;i<len;i++)
{
  if(array[i]%2 ==0)
  {
    evenArray.push(array[i]);
  }
}
evenArray.sort((a,b) =>a-b);
var j = 0;
for(let i =0;i< len; i++)
{
    if(array[i]%2==0)
    {
        array[i] = evenArray[j];
        j++
    }
}
console.log(array);