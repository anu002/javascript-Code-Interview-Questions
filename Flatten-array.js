 const array = [1,[3,7,[8,9]],[7]];

/*Method 1*/
array.flat(4);
 // Method 2
 console.log(flattenArray(array));
 function flattenArray(array)
 {
    let Flat =[];
    for(let i=0;i<array.length;i++)
    {
      if(Array.isArray(array[i]))
      {
        //const flatData=;
       Flat = Flat.concat( flattenArray(array[i]));
        
      }
      else
      {
       Flat.push(array[i]);
      
      }
    }
    return Flat;
     
 }

///Method 3

const array = [1,[3,7,[8,9]],[7]];
 console.log(flattenArray(array));
 function flattenArray(array)
 {
 let flat = [];
   array.forEach((element) => {
   Array.isArray(element) ? 
   flat = flat.concat(flattenArray(element))
   :flat.push(element);
   
   
   })
  
     return flat;
 }
