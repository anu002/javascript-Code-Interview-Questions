
let arr = [1,2,3,4,5];

Array.prototype.duplicator = function() {
 var newArr =[];
return this.concat(this);
}
console.log(arr.duplicator());
