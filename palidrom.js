const text = "Monkey";

//With the help of js method
const reverseText= text.split('').reverse().join('').toUpperCase();
if(text.toUpperCase()==reverseText)
{
    console.log("number is plaidrom ");
}

else{
    console.log("number is not a paldirom number");
}

///Without using string functions
let len = text.length;
for(let i = 0;i<len/2;i++)
{
    if(text[i] == text[len-i-1])
    {
        var msg ="palidrom ";
    }
    else
    {
        var msg ="not a paldirom ";
    }
}

console.log(msg);