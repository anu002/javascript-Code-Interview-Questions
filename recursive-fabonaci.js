let fabonaci = (i) =>{

  if(i ==0) return 0;
  if(i ==1) return 1;
  else{
    return fabonaci(i-1)+fabonaci(i-2);
  }


}
for(let i =0;i<10;i++)
{
console.log(fabonaci(i));
}
