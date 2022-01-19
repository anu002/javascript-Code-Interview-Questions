const array = [3,-1,4,9,-2,7,5,1,-7];
let positive_array = [];
for (let i = 0;i< array.length;i++){
    if(array[i]>0)
    {
        positive_array.push(array[i]);
    }
}
positive_array.sort((a,b)=>a-b)
console.log(positive_array);
var j = 0;
for(let i =0;i< array.length;i++)
{
    if(array[i]>=0)
    {
      
       array[i] = positive_array[j];
       j++
      
    }
}
console.log(array);
