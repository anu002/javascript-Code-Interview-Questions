//input = [3,7,8,9,-4,-8,6,9,-7,-6,3]
//output = [ -1, -3, -7, 4, 5, 6,  2,  8, 9]

var array = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];
var n = array.length;
let j = 0;
for (let i=0;i< n;i++)
{
   
    if(array[i]<0)
    {
       //console.log(array[i]);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        
 j++;
    }
    
   
}
// let j = 0;
// for (let i = 0; i < n; i++) {
//     if (arr[i] < 0) {
       
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
        
//         j++;
//     }
// }
console.log(array);