//two sum problem
let array = [2,7,11,15]   ///9  //output //[0,1]

//[9-2] = 0 

//try to minus from target and store in map
// check if that result exists in the map then return the index 
function twoSum (array,target)
{
 const comp = new Map();
 const len = array.length;
 for(let i= 0; i<len;i++)
 {
 if(comp[array[i]] >=0)
 {
 return [comp[array[i]],i];
 }
   comp[target-array[i]] = i;
   
 }
// return comp;
}
console.log(twoSum(array,26));










