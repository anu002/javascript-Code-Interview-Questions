//Promise.all and Promise.race,promise.settled

let myPromiseFirst = new Promise((resolve,reject)=>{
 setTimeout(() => {
 resolve("I am first Promise")
 },3000 );
})
let myPromiseSecond = new Promise((resolve,reject)=>{
 setTimeout(() => {
 resolve("I am Second Promise")
 },2000 );
})

let myPromiseThird = new Promise((resolve,reject)=>{
 setTimeout(() => {
 resolve("I am third Promise")
 },8000 );
})

Promise.all([myPromiseFirst,myPromiseSecond,myPromiseThird])
.then((data)=>console.log(data));

//it will return the fastest Promise

Promise.race([myPromiseFirst,myPromiseSecond,myPromiseThird])
.then((data)=>console.log(data));

Promise.allSettled([myPromiseFirst,myPromiseSecond,myPromiseThird])
.then((data)=>console.log(data));
