// Input :  arr[] = {1, 2, 0, 4, 3, 0, 5, 0};
// Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};
const array = [1, 2, 0, 4, 3, 0, 5, 0];
let nonZeroNumber = [];
let zeroNumber = [];
for(var i = 0;i< array.length;i++)
{
  if(array[i]>0)
  {
    nonZeroNumber.push(array[i]);
  }
  else
  {
    zeroNumber.push(array[i]);
  }
}
nonZeroNumber.push(...zeroNumber);
console.log(nonZeroNumber);