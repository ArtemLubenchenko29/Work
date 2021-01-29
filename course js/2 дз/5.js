// Найти минимальное число которое больше 300 и нацело делиться на 17
var a = 300;
var b = 17;
while (true)
{
if(! (a % b)) {
console.log(a); 
break;
}
a++;    
}
