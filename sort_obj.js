const myobj = {a: 24, b: 12, c:21, d:15};

function sortObjectbyValue(obj={},asc=true){ 
   const ret = {};
   Object.keys(obj).sort((a,b) => obj[asc?a:b]-obj[asc?b:a])
   .forEach(s => ret[s] = obj[s]);
   return ret
}

console.log(sortObjectbyValue(myobj))
