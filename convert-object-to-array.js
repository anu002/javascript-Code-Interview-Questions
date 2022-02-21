//covert array to object

//Ist approach using for loop
const array = ['cat','dog','cow'];
let obj = {}
for (let i =0;i<array.length;i++)
{
  obj[i] = array[i];
}

console.log(obj);

//2nd way
const obj2 = Object.assign({},array);
console.log(obj2);


//3rd way using spread operator
const obj3 = {...array};
console.log(obj3);
