//its iterable
function* genFun()
{
 yield 1;
 yield 2;
}
let genObj = genFun();
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
for (let value of genObj)
{
console.log(value);
}
let genSeq = [0,...genFun()]
console.log(genSeq);
