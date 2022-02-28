/*In web development, a polyfill is code that implements a feature on web browsers that
do not support the feature. Most often, it refers to a JavaScript library that
implements an HTML5 or CSS web standard, either an established standard on older browsers, or a proposed standard on existing browsers */
//Polifills for foreach method

let array = [2,7,9,5,7] ;
Array.prototype.forEach = null;



if(!Array.prototype.forEach)
{
  Array.prototype.forEach = function(callbackFun){
    for(val of this)
    {
    callbackFun(val+77);
    }
  }
}

array.forEach((arr) => {
   console.log(arr);
})


//Polifills for bind method


let name = {
  firstname:"anu",
  lastname:"sinha"
}

let printName = function(city,weather){

 console.log(`i am ${this.firstname} ${this.lastname}  ${city}    ${weather}`);
}

let obj = printName.bind(name,'Banagalore','hot');

obj();

Function.prototype.Mybind = function(...args)
{
 console.log(args[1]); 
 let fn = this;
  return function(...params)
  {
    fn.apply(args[0],[args[1],params[0]]);
    
  }
}
let obj2 = printName.Mybind(name,'kolkata');
obj2("cold");
